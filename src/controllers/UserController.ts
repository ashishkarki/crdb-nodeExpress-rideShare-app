import { getManager } from 'typeorm'
import { Request, Response, NextFunction } from 'express'
import { User } from '../entities/User'

export class UserController {
  /**
   * Registers a new user (add a User entity).
   *
   * @param body                         JSON containing user email, first_name, last_name, phone_numbers[]
   * @return                             message user is created
   * @throws 500                         if there is an error creating user
   */
  static register = async (req: Request, res: Response) => {
    await getManager().transaction(async (transactionalEntityManager) => {
      if (await transactionalEntityManager.findOne(User, req.body.email)) {
        console.error('User not created: user already exists')
        res
          .status(500)
          .json({ message: 'User not created: user already exists' })
      } else {
        const user = transactionalEntityManager.create(User, req.body)
        await transactionalEntityManager.save(User, user)

        res.status(200).json({ messages: ['User successfully created'] })
      }
    })
  }
  /**
   * Gets a user.
   *
   * @param email                the email of the user to retrieve
   * @return                     Json with the details about the user
   * @throws 400                 if no email is provided
   * @throws 500                 if the user does not exist
   */

  static profile = async (req: Request, res: Response) => {
    const userEmail: string = req.query.email as string
    if (userEmail === undefined) {
      return res.status(400).json({ messages: ['No user email provided.'] })
    }

    const entityManager = getManager()
    try {
      const user = await entityManager.findOneOrFail(User, userEmail)

      res.status(200).json({ user: user, messages: [] })
    } catch (err) {
      console.error('error performing transaction', err)
      res.status(500).send({ message: 'No user found' })
    }
  }

  /**
   * Logs in user
   *
   * @param email                the email of the user to retrieve
   * @return                     Json of is_authenticated: true
   * @throws 400                 if email is not provided
   */

  static login = async (req: Request, res: Response, next: NextFunction) => {
    const userEmail: string = req.body.email as string
    if (userEmail === undefined) {
      return res.status(400).json({ messages: ['No email provided.'] })
    }

    const entityManager = getManager()
    try {
      const user = await entityManager.findOneOrFail(User, userEmail)

      res.status(200).json({ is_authenticated: true })
    } catch (err) {
      console.error('Error performing transaction\n', err)
      res.status(500).json({ message: 'Unable to log in user' })
    }
  }

  /**
   * Deletes a user.
   *
   * @param email                the email of the user to delete
   * @return                     a message indicated the user was deleted
   * @throws NotFoundException   if the email is not provided
   */

  static delete = async (req: Request, res: Response) => {
    const userEmail: string = req.query.email as string
    if (userEmail === undefined) {
      return res.status(400).json({ messages: ['No email provided.'] })
    }
    try {
      await getManager().transaction(async (transactionalEntityManager) => {
        const deletedUser = await transactionalEntityManager.findOneOrFail(
          User,
          userEmail,
        )
        await transactionalEntityManager.remove(User, deletedUser)
      })
      res
        .status(200)
        .json({ messages: ['You have successfully deleted your account.'] })
    } catch (err) {
      console.error('error performing transaction', err)
      res.status(500).json({ messages: ['No user to delete'] })
    }
  }
}
export default UserController
