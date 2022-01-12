import { LocationHistory } from './../entities/LocationHistory'
import { getManager, FindOneOptions } from 'typeorm'
import { Request, Response } from 'express'
import { Vehicle } from '../entities/Vehicle'
import { v4 as uuidv4 } from 'uuid'
import { Calculations } from '../utils/calculations'
import moment from 'moment'

class VehicleController {
  static inUseToggle = async (req: Request, res: Response) => {
    const vehicle_id = req.params.vehicle_id

    try {
      const vehicle = await getManager().findOneOrFail(Vehicle, vehicle_id)

      vehicle.in_use = !vehicle.in_use

      await getManager().save(vehicle)
    } catch (error) {
      VehicleController.errorResponseBuilder(
        res,
        `Could not toggle vehicle: ${vehicle_id}'s in_use status`,
      )
    }
  }
  /**
   * @param vehicle_id - the id of the vehicle whose ride status is to be determined
   * @returns the status of the vehicle's ride (checked-out/running or checked-in/not-running)
   * @throws if the vehicle_id is not found
   *
   * @example true - means vehicle is running and is unavailable
   */
  static status = async (req: Request, res: Response) => {
    const vehicle_id = req.params.vehicle_id

    try {
      const entityManager = getManager()
      const vehicle = await entityManager.findOneOrFail(Vehicle, vehicle_id)

      if (vehicle.in_use) {
        VehicleController.responseBuilder(res, { in_use_checkout_out: true })
      } else {
        VehicleController.responseBuilder(res, { in_use_checkout_out: false })
      }
    } catch (error) {
      VehicleController.errorResponseBuilder(res)
    }
  }
  /**
   * Gets a list of all vehicles (limited by passed value).
   *
   * @param maxVehicles              the maximum number of vehicle rows to return
   * @return                         a json array containing the vehicle details
   * @throws 500                     if you pass 0 or a negative value for the maximum rows to return
   */
  static all = async (req: Request, res: Response) => {
    const entityManager = getManager()
    const max = +req.query.max_vehicles || 20

    try {
      const vehicles = await entityManager.find(Vehicle, {
        take: max,
      })

      // res.status(200).json(vehicles)
      VehicleController.responseBuilder(res, vehicles)
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      return res.status(500).json({ message: 'Unable to find vehicles' })
    }
  }

  /**
   * Adds a vehicle.
   *
   * @param body                      JSON of vehicle details
   * @return                          the generated uuid (key) of the added vehicle
   */

  public static add = async (req: Request, res: Response) => {
    const battery = req.body.battery
    const vehicle_type = req.body.vehicle_type

    try {
      const entityManager = getManager()

      // Create a new instance of Vehicle class.
      const newVehicle = entityManager.create(Vehicle, {
        // Set the new vehicle properties.
        id: uuidv4(),
        battery: battery,
        in_use: false,
        vehicle_type: vehicle_type,
      })

      // Save the new vehicle to the database.
      await entityManager.save(newVehicle)

      // Return the vehicle object.
      VehicleController.responseBuilder(res, { id: newVehicle.id })
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      VehicleController.errorResponseBuilder(res, 'Cannot add vehicle!!')
    }
  }

  /**
   * Gets a specific vehicle
   *
   * @param vehicleId               the uuid of the vehicle to return
   * @return                        json with the vehicle details
   * @throws 500                    if the passed vehicle ID is not in the database
   */

  public static one = async (req: Request, res: Response) => {
    const vehicle_id = req.params.vehicle_id

    try {
      const entityManager = getManager()
      // const vehicle = await entityManager.findOneOrFail(Vehicle, vehicle_id)

      // //   res.status(200).json(vehicle)
      // VehicleController.responseBuilder(res, vehicle)
      await entityManager.transaction(async (txnEntityMgr) => {
        const vehicle = await txnEntityMgr.findOneOrFail(Vehicle, vehicle_id)

        const locationHistory = await txnEntityMgr.find(LocationHistory, {
          where: { vehicle: { id: vehicle_id } },
          order: { ts: 'DESC' },
        })

        vehicle.locationHistory = locationHistory

        VehicleController.responseBuilder(res, vehicle)
      })
    } catch (err) {
      console.error('Error performing transaction:\n', err)

      //   res.status(500).send('Vehicle not found')
      VehicleController.errorResponseBuilder(res)
    }
  }

  /**
   * Removes a specific vehicle.
   *
   * @param vehicleId               the uuid of the vehicle to delete
   * @return                        confirmation message
   * @throws 500                   if the passed vehicleId is not in the database
   * @throws 409                   if the vehicle is in use
   */

  static delete = async (req: Request, res: Response) => {
    const vehicle_id = req.params.vehicle_id

    try {
      let deleted = false
      await getManager().transaction(async (txnEntityMgr) => {
        const vehicle = await txnEntityMgr.findOneOrFail(Vehicle, vehicle_id)

        // Check if vehicle is in use
        if (vehicle.in_use) {
          throw new Error('Vehicle is in use')
        }
        // If no, delete the vehicle and set the deleted flag to true
        await txnEntityMgr.remove(vehicle)

        deleted = true
      })

      if (deleted) {
        res.status(200).json({
          messages: [`Deleted vehicle with id ${vehicle_id} from database.`],
        })
      } else {
        VehicleController.errorResponseBuilder(
          res,
          `Vehicle ${vehicle_id} in use and cannot be removed!!`,
          409,
        )
      }
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      // res.status(500).json({ message: 'No vehicle to delete' })
      VehicleController.errorResponseBuilder(res, 'No such vehicle to delete')
    }
  }

  /**
   * Check out a vehicle (set in_use = true)
   *
   * @param vehicleId                 UUID of the vehicle to check out
   * @return                          confirmation message
   * @throws 500                      if the passed vehicle ID is not in the database
   * @throws 409                      if the vehicle is in use
   */

  public static checkout = async (req: Request, res: Response) => {
    const vehicle_id = req.params.vehicle_id

    if (vehicle_id === undefined) {
      return res
        .status(400)
        .json({ messages: ['Unable to start ride. No vehicle id provided.'] })
    }

    try {
      await getManager().transaction(async (txnEntityMgr) => {
        // retrieve vehicle object based on vehicle ID
        const vehicle = await txnEntityMgr.findOneOrFail(Vehicle, vehicle_id)

        // Mark vehicle as in use
        // vehicle.in_use = true

        // // Save updated vehicle
        // await txnEntityMgr.save([vehicle])

        // res.status(200).send('Ride started with vehicle ${vehicle_id}')

        // Check if vehicle is in use, then send proper message
        if (vehicle.in_use) {
          VehicleController.errorResponseBuilder(
            res,
            `Vehicle ${vehicle_id} is already in use!!`,
            409,
          )
        }

        // If no, update the vehicle and set the in_use flag to true
        const lastLocation = await txnEntityMgr.findOneOrFail(LocationHistory, {
          where: { vehicle: { id: vehicle_id, in_use: false } },
          orderBy: { ts: 'DESC' },
        } as FindOneOptions<LocationHistory>)

        const now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')

        // Create a new location history entry with most recent latitude and longitude and current time (now)
        const newLocation = txnEntityMgr.create(LocationHistory, {
          id: uuidv4(),
          vehicle: vehicle,
          latitude: lastLocation.latitude,
          longitude: lastLocation.longitude,
          ts: now,
        })

        // Create new location history object
        // Mark vehicle as in use
        vehicle.in_use = true

        // Save new location history object and updated vehicle object
        await txnEntityMgr.save([newLocation, vehicle])

        VehicleController.responseBuilder(res, {
          message: `Vehicle ${vehicle_id} checked out.`,
        })
      })
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      //res.status(500).send('Vehicle not found')
      VehicleController.errorResponseBuilder(
        res,
        'No such vehicle to check out',
      )
    }
  }

  /**
   * Check in a vehicle: update location and checkin time, set in_use = false,
   *
   * @param vehicleId                 UUID of the vehicle to check out
   * @return                          confirmation message
   * @throws 500                      if the passed vehicle ID is not in the database
   * @throws 409                      if the vehicle is not use
   */

  static checkin = async (req: Request, res: Response) => {
    const vehicle_id = req.params.vehicle_id
    const battery = req.body.battery
    const endLongitude = req.body.longitude
    const endLatitude = req.body.latitude
    const now = Date()
    const messages = []

    let startLongitude = 0
    let startLatitude = 0
    let startTime = null

    // Check that parameters have valid values
    const validityMessages = VehicleController.checkParameterValidity(
      endLongitude,
      endLatitude,
      battery,
    )

    if (validityMessages.length > 0) {
      return res.status(400).json({ messages: validityMessages })
    }

    try {
      await getManager().transaction(async (txnEntityMgr) => {
        // get vehicle from ID
        const vehicle = await txnEntityMgr.findOneOrFail(Vehicle, vehicle_id)

        // update values
        vehicle.in_use = false
        vehicle.battery = battery

        // get the most recent location history to be used as start location
        // to calculate the distance travelled below
        const lastLocation = await txnEntityMgr.findOneOrFail(LocationHistory, {
          where: { vehicle: { id: vehicle_id } },
          orderBy: { ts: 'DESC' },
        } as FindOneOptions<LocationHistory>)

        // update values for start location to calculate distance
        startLatitude = lastLocation.latitude
        startLongitude = lastLocation.longitude
        startTime = lastLocation.ts

        // create the new location history object based on where
        // this vehicle stopped
        const endLocation = txnEntityMgr.create(LocationHistory, {
          id: uuidv4(),
          vehicle: vehicle,
          latitude: endLatitude,
          longitude: endLongitude,
          ts: now,
        })

        // Save updated vehicle and new end location of that vehicle
        await txnEntityMgr.save([endLocation, vehicle])
      })

      // Calculate distance and velocity for this ride
      const { distance, duration, speed } = VehicleController.calculateMetrics(
        startLatitude,
        startLongitude,
        endLatitude,
        endLongitude,
        startTime,
        now,
      )

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

  private static checkParameterValidity = (
    endLongitude: number,
    endLatitude: number,
    battery: number,
  ) => {
    const messages = []

    if (
      endLongitude < -180 ||
      endLongitude > 180 ||
      endLatitude < -90 ||
      endLatitude > 90 ||
      battery < 0 ||
      battery > 100
    ) {
      if (endLongitude < -180 || endLongitude > 180) {
        messages.push('Longitude must be between -180 and 180')
      }
      if (endLatitude < -90 || endLatitude > 90) {
        messages.push('Latitude must be between -90 and 90')
      }
      if (battery < 0 || battery > 100) {
        messages.push('Battery (percent) must be between 0 and 100.')
      }
      // return res.status(400).json({ messages: messages })
    }

    return messages
  }

  private static calculateMetrics = (
    startLatitude: number,
    startLongitude: number,
    endLatitude: number,
    endLongitude: number,
    startTime: Date,
    now: string,
  ) => {
    const distance = Calculations.calculate_distance({
      latitude1: +startLatitude,
      longitude1: +startLongitude,
      latitude2: +endLatitude,
      longitude2: +endLongitude,
    })

    const duration = Calculations.calculate_duration_minutes({
      startTime: startTime,
      endTime: now,
    })

    const speed = Calculations.calculate_velocity({
      distance: distance,
      startTime: startTime,
      endTime: now,
    })

    return {
      distance: distance,
      duration: duration,
      speed: speed,
    }
  }

  /**
   * @description send an error response with preconfigured sensible defaults
   */
  private static errorResponseBuilder = (
    res: Response,
    message = 'Unable to find vehicle',
    resStatusCode = 500,
  ) => {
    res.status(resStatusCode).send(message)
  }

  /**
   * @description send a json response with preconfigured sensible defaults
   */
  private static responseBuilder = (
    response: Response,
    responseObj: Vehicle | Vehicle[] | {} = {},
    responseStatus = 200,
  ) => {
    response.status(responseStatus).json(responseObj)
  }
}
export default VehicleController
