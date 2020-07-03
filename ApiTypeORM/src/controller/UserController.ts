import { getRepository } from 'typeorm'
import { User } from '../entity/User'
import { Response, Request } from 'express'

export const getUsers = async (_, response: Response) => {
  const dados = await getRepository(User).find()
  return response.json(dados)
}

export const saveUser = async (request: Request, response: Response) => {
  const user = await getRepository(User).save(request.body)
  return response.json(user)
}

export const findOne = async (request: Request, response: Response) => {
  const user = await getRepository(User).findOne(request.params.id)
  return response.json(user)
}

export const update = async (request: Request, response: Response) => {
  const { id } = request.params
  const result = await getRepository(User).update(id, request.body)
  return response.json(result)
}

export const remove = async (request: Request, response: Response) => {
  const { id } = request.params
  const result = await getRepository(User).delete(id)
  return response.json(result)
}

/*
export class UserController {
  private userRepository = getRepository(User)

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find()
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id)
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body)
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOne(request.params.id)
    await this.userRepository.remove(userToRemove)
  }
}
*/
