import winston from 'winston'
import { config } from '../../config'

function createLogger(): winston.Logger {
  return winston.createLogger({
    level: config.logLevel,
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  })
}

export const logger = createLogger()
