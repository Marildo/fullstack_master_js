import chai, { expect, assert } from 'chai'
import chaiHttp from 'chai-http'
import { Response } from 'superagent'
import app from './app'

chai.use(chaiHttp)

describe('AppController', () => {
  it('Welcome API', done => {
    chai
      .request(app)
      .get('/')
      .end((erro: any, res: Response) => {
        expect(res).to.have.status(200)
        expect(res.body.message).to.equals('Helo world!!')
        done()
      })
  })

  it('Should return 4', done => {
    chai
      .request(app)
      .get('/raiz/16')
      .end((erro: any, res: Response) => {
        expect(res).to.have.status(200)
        expect(res.body.value).to.equals(4)
        done()
      })
  })
})
