import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../../interfaces/error'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ error: err })

  const statusCode = 500
  const massage = 'Something Went Wrong !'
  const errorMassages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidatorError') {
    // const simplifiedError = handleValidationError(err)
  }

  res.status(statusCode).json({
    success: false,
    massage,
    errorMassages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
}

export default globalErrorHandler
