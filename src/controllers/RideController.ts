import { Vehicle } from './../entities/Vehicle'
import { LocationHistory } from './../entities/LocationHistory'
import { Request, Response } from 'express'
import { getManager, FindOneOptions } from 'typeorm'
import { Ride } from '../entities/Ride'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../entities/User'
import { Calculations } from '../utils/calculations'

export class RideController {
  /**
   * Starts a ride on this vehicle for this user.
   *
   * @param body                            JSON of vehicle_id and email
   * @return                                New Ride details
   * @throws NotFoundException              if the vehicle or user is not found
   * @throws InvalidVehicleStateException   if the requested vehicle is not already marked "in use"
   */
  static start = async (req: Request, res: Response) => {
    const vehicle_id: string = req.body.vehicle_id as string
    const email = req.body.email
    const currentTimestamp = new Date()
    const now = moment(currentTimestamp).format('YYYY-MM-DD HH:mm:ss')

    const newRideId = uuidv4()

    if (email === undefined || email === '') {
      return res
        .status(400)
        .json({ messages: ['Unable to start ride. No user email provided.'] })
    }

    if (vehicle_id === undefined) {
      return res
        .status(400)
        .json({ messages: ['Unable to start ride. No vehicle id provided.'] })
    }
    try {
      await getManager().transaction(async (transactionalEntityManager) => {
        const user = await transactionalEntityManager.findOneOrFail(User, email)
        const vehicle = await transactionalEntityManager.findOneOrFail(
          Vehicle,
          vehicle_id,
        )
        const lastchx = await transactionalEntityManager.findOneOrFail(
          LocationHistory,
          {
            where: { vehicle: { id: vehicle_id, in_use: false } },
            orderBy: { ts: 'DESC' },
          } as FindOneOptions,
        )

        vehicle.in_use = true

        const newLocation = transactionalEntityManager.create(LocationHistory, {
          id: uuidv4(),
          vehicle: vehicle,
          ts: now,
          latitude: lastchx.latitude,
          longitude: lastchx.longitude,
        })

        const newRide = transactionalEntityManager.create(Ride, {
          id: newRideId,
          vehicle: vehicle,
          user: user,
          start_ts: now,
          end_ts: null,
        })

        await transactionalEntityManager.save([vehicle, newLocation, newRide])
      })
      res.status(200).json({
        ride: {
          id: newRideId,
          vehicle_id: vehicle_id,
          user_email: email,
          start_ts: now,
          end_ts: null,
        },
        messages: [`Ride started with vehicle ${vehicle_id}`],
      })
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      res.status(500).json({
        messages: [
          `Could not start ride on vehicle ${vehicle_id}`,
          `Either the vehicle is actively being ridden or it has been deleted from the database`,
        ],
      })
    }
  }

  /**
   * Gets a list of all rides for the given user.
   *
   * @param email               email of the user to get rides for
   * @return                    List of all the rides (active and history) for this user
   * @throws 400                if the vehicle or user is not found
   */

  static byUser = async (req: Request, res: Response) => {
    const user_email = req.query.email
    if (user_email === undefined || user_email === '') {
      return res.status(400).json({ messages: ['No user email provided.'] })
    }

    try {
      const entityManager = getManager()

      const rides = await entityManager
        .createQueryBuilder(Ride, 'rides')
        .leftJoinAndSelect('rides.vehicle', 'v')
        .where('user_email =:user_email', { user_email: user_email })
        .select([
          'v.id as id',
          'rides.user_email as user_email',
          'rides.start_ts as start_time',
          'rides.end_ts as end_time',
          'v.in_use as in_use',
          'v.vehicle_type as vehicle_type',
        ])
        .orderBy('end_time', 'DESC')
        .getRawMany()

      if (rides.length > 0) {
        res.status(200).json(rides)
      } else {
        res.status(500).json({ message: 'No rides found' })
      }
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      res.status(500).json({ message: err.message })
    }
  }

  /**
   * Gets the active ride for this vehicle/user combination.
   *
   * @param vehicle_id               the vehicle that the user is riding
   * @param email                    the email address that identifies the user
   * @return                         Json containing details about the ride
   * @throws 500                     if the vehicle or user is not found
   *
   */
  static active = async (req: Request, res: Response) => {
    const vehicle_id = req.query.vehicle_id
    const email = req.query.email
    if (email === undefined) {
      return res.status(400).json({ messages: ['no email or id'] })
    }
    if (vehicle_id === undefined) {
      return res.status(400).json({ messages: ['no id'] })
    }

    try {
      const entityManager = getManager()
      const vehicleInfo = await entityManager
        .createQueryBuilder(Vehicle, 'vehicles')
        .leftJoinAndSelect('vehicles.locationHistory', 'lh')
        .leftJoinAndSelect('vehicles.rideList', 'r')
        .where('vehicles.id = :vehicle_id', { vehicle_id: vehicle_id })
        .andWhere('r.user_email = :email', { email: email })
        .andWhere('r.end_ts is null')
        .andWhere('vehicles.in_use is true')
        .andWhere('lh.ts = r.start_ts')
        .select([
          'vehicles.id as id',
          'vehicles.in_use as in_use',
          'vehicles.battery as battery',
          'vehicles.vehicle_type as vehicle_type',
          'lh.ts as last_checkin',
          'lh.latitude as last_latitude',
          'lh.longitude as last_longitude',
        ])
        .getRawOne()
      if (vehicleInfo == undefined) {
        res.status(500).json({ message: 'No active rides found.' })
      } else {
        res.status(200).json(vehicleInfo)
      }
    } catch (err) {
      console.error('error performing transaction', err)
      res.status(500).json({ message: 'No active rides found.' })
    }
  }
  /**
   * Ends this specific ride (also calculates time, distance, and speed travelled).
   *
   * @param body                            JSON including vehicle_id, battery, user_email, latitude, longitude
   * @return                                message about the time, speed and distance traveled
   * @throws 400                            if the latitude, longitude and battery values are invalid
   * @throws 500                            if the vehicle or user is not found
   * @throws 500                            if the requested vehicle is not already marked "in use"
   * @throws 500                            if the math calculations result in an error
   */

  static end = async (req: Request, res: Response) => {
    const vehicle_id = req.body.vehicle_id
    const battery = req.body.battery
    const user_email = req.body.email
    const longitude2 = req.body.longitude
    const latitude2 = req.body.latitude
    const now = Date()
    const messages = []

    let longitude1 = longitude2
    let latitude1 = latitude2
    let start_time = null

    if (
      longitude2 < -180 ||
      longitude2 > 180 ||
      latitude2 < -90 ||
      latitude2 > 90 ||
      battery < 0 ||
      battery > 100
    ) {
      if (longitude2 < -180 || longitude2 > 180) {
        messages.push('Longitude must be between -180 and 180')
      }
      if (latitude2 < -90 || latitude2 > 90) {
        messages.push('Latitude must be between -90 and 90')
      }
      if (battery < 0 || battery > 100) {
        messages.push('Battery (percent) must be between 0 and 100.')
      }
      return res.status(400).json({ messages: messages })
    }

    try {
      await getManager().transaction(async (transactionalEntityManager) => {
        const vehicle = await transactionalEntityManager.findOneOrFail(
          Vehicle,
          vehicle_id,
        )

        const currentRide = await transactionalEntityManager.findOneOrFail(
          Ride,
          {
            where: {
              user: { email: user_email },
              vehicle: { id: vehicle_id, in_use: true },
              end_ts: null,
            },
          },
        )

        start_time = currentRide.start_ts
        currentRide.end_ts = now

        const startLocation = await transactionalEntityManager.findOne(
          LocationHistory,
          {
            where: {
              ts: currentRide.start_ts,
              vehicle: { id: vehicle_id, in_use: true },
            },
          },
        )
        latitude1 = startLocation.latitude
        longitude1 = startLocation.longitude

        vehicle.in_use = false
        vehicle.battery = battery

        const location = transactionalEntityManager.create(LocationHistory, {
          id: uuidv4(),
          vehicle: vehicle,
          ts: now,
          longitude: longitude2,
          latitude: latitude2,
        })

        await transactionalEntityManager.save([location, currentRide, vehicle])
      })
      const distance = Calculations.calculate_distance({
        latitude1: +latitude1,
        longitude1: +longitude1,
        latitude2: +latitude2,
        longitude2: +longitude2,
      })
      const duration = Calculations.calculate_duration_minutes({
        startTime: start_time,
        endTime: now,
      })
      const speed = Calculations.calculate_velocity({
        distance: distance,
        startTime: start_time,
        endTime: now,
      })
      res.status(200).json({
        messages: [
          `You have completed your ride on vehicle ${vehicle_id}.`,
          `You traveled ${distance} km in ${duration} minutes, for an average velocity of ${speed} km/h`,
        ],
      })
    } catch (err) {
      console.error('error performing transaction', err)
      res
        .status(500)
        .json({ message: `Unable to end ride on vehicle ${vehicle_id}` })
    }
  }
}
