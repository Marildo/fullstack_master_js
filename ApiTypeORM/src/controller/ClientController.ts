import { getRepository } from 'typeorm'
import { Client } from '../entity/Client'
import { Request, Response, NextFunction } from 'express'

export class ClientController {
  private repository = getRepository(Client)

  async save(request: Request, response: Response, next: NextFunction) {
    const client = await this.repository.save(request.body)
    return response.json(client)
  }

  async all(request: Request, response: Response, next: NextFunction) {
    const all = await this.repository.find()
    return response.json(all)
  }
}
