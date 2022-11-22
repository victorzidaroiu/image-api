import { Express, Request, Response } from 'express'
import { resizeImageRoute } from './images/resize'

export function addRoutes(api: Express): void {
  api.route('/health').get((_req: Request, res: Response) => {
    res.sendStatus(200)
  })

  api.route('/v1/images/resize-from-url/:url').get(resizeImageRoute)
}
