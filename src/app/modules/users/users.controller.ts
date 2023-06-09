import { NextFunction, Request, Response } from 'express'
import usersServices from './users.services'

const createdUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await usersServices.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  createdUser,
}
