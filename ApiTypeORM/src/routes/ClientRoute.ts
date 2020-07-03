import { Router, Request, Response, NextFunction } from 'express'
import { ClientController } from './../controller/ClientController'

const clientRoutes = Router()

clientRoutes.get(
  '/clients/',
  (request: Request, response: Response, next: NextFunction) => {
    const con = new ClientController()
    return con.all(request, response, next)
  }
)

clientRoutes.post(
  '/clients/',
  (request: Request, response: Response, next: NextFunction) => {
    const con = new ClientController()
    return con.save(request, response, next)
  }
)

export { clientRoutes }
