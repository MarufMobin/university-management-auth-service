import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (elm: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: elm?.path,
        message: elm?.message,
      }
    }
  )
  const statusCode = 400

  return {
    errors,
    statusCode,
  }
}
