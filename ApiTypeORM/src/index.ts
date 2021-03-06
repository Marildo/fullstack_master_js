import 'reflect-metadata'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from './routes'
import { configRoutes } from './routes/index'

import { createConnection } from 'typeorm'
createConnection()

const app = express()

app.use(bodyParser.json())
app.use(routes)

configRoutes(app)

const port = 3000
app.listen(port, () => {
  console.log(`Api running in  http://localhost:${port}`)
})
