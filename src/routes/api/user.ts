import { Application, Request, Response, NextFunction } from 'express'
import { UserController } from '../../controllers/UserController'

export class UserRouter {
  public static init(express: Application) {
    express.post('/api/register', (req: Request, res: Response): void => {
      UserController.register(req, res)
    })

    express.post(
      '/api/login',
      (req: Request, res: Response, next: NextFunction): void => {
        UserController.login(req, res, next)
      },
    )

    express.get('/api/users', (req: Request, res: Response): void => {
      UserController.profile(req, res)
    })

    express.delete('/api/users/delete', (req: Request, res: Response): void => {
      UserController.delete(req, res)
    })
  }
}
