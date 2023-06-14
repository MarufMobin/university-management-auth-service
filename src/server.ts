import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorLogger, logger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢 Database Connect Successfully`)

    // App listen are here
    app.listen(config.port, () => {
      logger.info(`Application listening on config.port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect database', err)
  }
}
boostrap()
