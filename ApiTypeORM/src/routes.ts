import { Router, Request, Response, NextFunction } from 'express'
import {
  getUsers,
  saveUser,
  findOne,
  update,
  remove
} from './controller/UserController'

const routes = Router()

routes.get('/', (request: Request, response: Response, next: NextFunction) => {
  return response.json('Hello world!!!!|')
})

routes.get('/users', getUsers)

routes.post('/users', saveUser)

routes.get('/users/:id', findOne)

routes.put('/users/:id', update)

routes.delete('/users/:id', remove)

export default routes
