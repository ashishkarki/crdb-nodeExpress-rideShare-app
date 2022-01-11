import { Application, Request, Response } from 'express'
import VehicleController from '../../controllers/VehicleController'

//API routes that will use the Vehicle Controller
export class VehicleRouter {
  public static init(express: Application) {
    express.post('/api/vehicles/add', (req: Request, res: Response): void => {
      VehicleController.add(req, res)
    })

    express.delete(
      '/api/vehicles/:vehicle_id/delete',
      (req: Request, res: Response): void => {
        VehicleController.delete(req, res)
      },
    )

    express.get(
      '/api/vehicles/:vehicle_id',
      (req: Request, res: Response): void => {
        VehicleController.one(req, res)
      },
    )

    express.get('/api/vehicles', (req: Request, res: Response): void => {
      VehicleController.all(req, res)
    })

    // get a vehicle's ride status: is it checked-out or running ? Or not
    express.get(
      '/api/vehicles/:vehicle_id/status',
      (req: Request, res: Response): void => {
        VehicleController.status(req, res)
      },
    )

    express.put(
      '/api/vehicles/:vehicle_id/checkin',
      (req: Request, res: Response): void => {
        VehicleController.checkin(req, res)
      },
    )

    express.put(
      '/api/vehicles/:vehicle_id/checkout',
      (req: Request, res: Response): void => {
        VehicleController.checkout(req, res)
      },
    )
  }
}
