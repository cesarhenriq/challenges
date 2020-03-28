import request from 'supertest'

import '../../src/database'
import app from '../../src/app'
import UseModel from '../../src/app/models/user'
import createToken from '../../src/helper/create-token'

let user = ''
let token = ''

beforeAll(async () => {
  user = await UseModel.create({
    name: `user teste${Date.now()}`,
    email: `${Date.now()}@mail.com`,
    password: `123456`
  })

  token = await createToken(user.id, user.email)
})

describe('Endpoint Profile', () => {
  it('should show one profile', async done => {
    const response = await request(app)
      .get('/api/v1/profile')
      .set('Authorization', `bearer ${token}`)
    expect(response.status).toBe(200)
    done()
  })

  it('should alter profile', async done => {
    const response = await request(app)
      .put(`/api/v1/profile`)
      .set('Authorization', `bearer ${token}`)
      .send({ name: `Joe Doe${Date.now()}` })
    expect(response.status).toBe(200)
    done()
  })

  it('should delete profile', async done => {
    const response = await request(app)
      .delete(`/api/v1/profile`)
      .set('Authorization', `bearer ${token}`)
    expect(response.status).toBe(204)
    done()
  })
})
