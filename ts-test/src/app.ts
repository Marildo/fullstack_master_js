import Express from 'express'

class AppController {
  private express: Express.Application

  constructor () {
    this.express = Express()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(Express.json())
  }

  private routes (): void {
    const router = Express.Router()

    this.express.use(router)

    router.get('/', (request, response) => {
      return response.json({ message: 'Helo world!!' })
    })

    router.get('/raiz/:value', (request, response) => {
      const value:any = Math.sqrt(Number(request.params.value))
      return response.json({
        message: 'Raiz e sd',
        value
      })
    })
  }

  public getExpress (): Express.Application {
    return this.express
  }
}

export default new AppController().getExpress()
