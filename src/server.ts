import express, { Request, Response, NextFunction } from 'express'
import expressWinston from 'express-winston'
import winston from 'winston'

import { addRoutes } from './routes'

type CreateServerOpts = {
  logger: winston.Logger
}

export function createServer({ logger }: CreateServerOpts): express.Express {
  const api = express()

  // Log incoming requests
  api.use(expressWinston.logger({ meta: true, winstonInstance: logger }))

  addRoutes(api)

  // Add an error handling logger
  api.use(expressWinston.errorLogger({ winstonInstance: logger }))

  api.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.sendStatus(500)
  })

  return api
}
