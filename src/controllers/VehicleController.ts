import { getManager, FindOneOptions } from 'typeorm'
import { Request, Response } from 'express'
import { Vehicle } from '../entities/Vehicle'
import { v4 as uuidv4 } from 'uuid'
import { Calculations } from '../utils/calculations'

class VehicleController {
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
        order: {
          last_checkin: 'DESC',
        },
      })
      res.status(200).json(vehicles)
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
    const latitude = req.body.latitude
    const longitude = req.body.longitude
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
        last_latitude: latitude,
        last_longitude: longitude,
        last_checkin: new Date().toISOString(),
      })

      // Save the new vehicle to the database.
      await entityManager.save(newVehicle)

      // Return the vehicle object.
      return VehicleController.responseBuilder(res, { id: newVehicle.id })
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      return VehicleController.errorResponseBuilder(res, 'Cannot add vehicle!!')
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
      const vehicle = await entityManager.findOneOrFail(Vehicle, vehicle_id)

      //   res.status(200).json(vehicle)
      return VehicleController.responseBuilder(res, vehicle)
    } catch (err) {
      console.error('Error performing transaction:\n', err)

      //   res.status(500).send('Vehicle not found')
      return VehicleController.errorResponseBuilder(res)
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
    return res.status(resStatusCode).send(message)
  }

  /**
   * @description send a json response with preconfigured sensible defaults
   */
  private static responseBuilder = (
    response: Response,
    responseObj: Vehicle | {} = {},
    responseStatus = 200,
  ) => {
    return response.status(responseStatus).json(responseObj)
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
      await getManager().transaction(async (transactionalEntityManager) => {
        const vehicle = await transactionalEntityManager.findOneOrFail(
          Vehicle,
          vehicle_id,
        )
        // Lab TODO
        // Check if vehicle is in use
        // If yes, delete the vehicle and set the deleted
        // variable to true.
        process.stdout.write('DELETE VEHICLE LAB NOT YET COMPLETED\n')
      })
      if (deleted) {
        res.status(200).json({
          messages: [`Deleted vehicle with id ${vehicle_id} from database.`],
        })
      } else {
        res
          .status(409)
          .json({ message: 'Vehicle ${vehicle_id} is currently in use' })
      }
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      res.status(500).json({ message: 'No vehicle to delete' })
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
      await getManager().transaction(async (transactionalEntityManager) => {
        // retrieve vehicle object based on vehicle ID
        const vehicle = await transactionalEntityManager.findOneOrFail(
          Vehicle,
          vehicle_id,
        )

        // Mark vehicle as in use
        vehicle.in_use = true

        // Save updated vehicle
        await transactionalEntityManager.save([vehicle])

        res.status(200).send('Ride started with vehicle ${vehicle_id}')
      })
    } catch (err) {
      console.error('Error performing transaction:\n', err)
      res.status(500).send('Vehicle not found')
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
      return res.status(400).json({ messages: messages })
    }

    try {
      await getManager().transaction(async (transactionalEntityManager) => {
        // get vehicle from ID
        const vehicle = await transactionalEntityManager.findOneOrFail(
          Vehicle,
          vehicle_id,
        )

        // Save the previous checkin values for this vehicle
        // This is the ride start location
        // Used below to calculate distance and velocity
        startLatitude = vehicle.last_latitude
        startLongitude = vehicle.last_longitude
        startTime = vehicle.last_checkin

        // update values
        vehicle.in_use = false
        vehicle.battery = battery
        vehicle.last_longitude = endLongitude
        vehicle.last_latitude = endLatitude
        vehicle.last_checkin = now

        // Save updated vehicle
        await transactionalEntityManager.save([vehicle])
      })

      // Calculate distance and velocity for this ride
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
export default VehicleController
