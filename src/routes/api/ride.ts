import { Application, Request, Response } from 'express'
import { RideController } from '../../controllers/RideController'

//API routes that will utilize the RideController
export class RideRouter {
  public static init(express: Application) {
    express.post('/api/rides/start', (req: Request, res: Response): void => {
      RideController.start(req, res)
    })

    express.get('/api/rides/active', (req: Request, res: Response): void => {
      RideController.active(req, res)
    })

    express.post('/api/rides/end', (req: Request, res: Response): void => {
      RideController.end(req, res)
    })

    express.get('/api/rides', (req: Request, res: Response): void => {
      RideController.byUser(req, res)
    })
  }
}
