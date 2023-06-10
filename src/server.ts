import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`🛢 Database Connect Successfully`)

    // App listen are here
    app.listen(config.port, () => {
      console.log(`Application listening on config.port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect database', err)
  }
}
boostrap()
