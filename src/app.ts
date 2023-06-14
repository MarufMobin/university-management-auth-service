import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHadler'

const app: Application = express()

app.use(cors())

// Perser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working Successfully')
//   // throw new ApiError( 400, "Own Custom Masage")
//   next('this is a Custom Error')
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app
