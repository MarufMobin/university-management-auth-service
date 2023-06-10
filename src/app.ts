import express, { Application, Request, Response } from "express";
import cors from 'cors';

const app: Application = express()
const port = 3000

// Perser 
app.use(cors())
app.use( express.urlencoded({extended: true }))

app.get('/', (req: Request, res: Response ) => {
  res.send('Working Successfully')
})

export default app;