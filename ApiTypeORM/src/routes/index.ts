import { clientRoutes } from './ClientRoute'

const configRoutes = (app) => {
  app.use(clientRoutes)
}

export { configRoutes }
