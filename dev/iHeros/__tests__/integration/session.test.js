import request from 'supertest'

import '../../src/database'
import app from '../../src/app'
import UseModel from '../../src/app/models/user'

let user = ''

beforeAll(async () => {
  user = await UseModel.create({
    name: `user teste${Date.now()}`,
    email: `${Date.now()}@mail.com`,
    password: `123456`
  })
})

describe('Endpoint Session', () => {
  it('should create new user', async done => {
    const response = await request(app)
      .post('/register')
      .send({
        name: `user teste${Date.now()}`,
        email: `${Date.now()}@mail.com`,
        password: '123456'
      })
    expect(response.status).toBe(201)
    done()
  })

  it('should logon user', async done => {
    const response = await request(app)
      .post('/logon')
      .send({
        email: user.email,
        password: '123456'
      })
    expect(response.status).toBe(200)
    done()
  })
})
