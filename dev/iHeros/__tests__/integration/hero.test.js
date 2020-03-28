import request from 'supertest'

import '../../src/database'
import app from '../../src/app'
import UseModel from '../../src/app/models/user'
import HeroModel from '../../src/app/models/hero'
import createToken from '../../src/helper/create-token'

let user = ''
let token = ''
let hero = ''

beforeAll(async () => {
  user = await UseModel.create({
    name: `user teste${Date.now()}`,
    email: `${Date.now()}@mail.com`,
    password: `123456`
  })

  hero = await HeroModel.create({
    name: `Zorro${Date.now()}`,
    class: 'S',
    latitude: -23.5506507,
    longitude: -46.6333824
  })

  token = await createToken(user.id, user.email)
})

describe('Endpoit Heroes', () => {
  it('should return unauthorized', async done => {
    const response = await request(app).get('/api/v1/heroes')
    expect(response.status).toBe(401)
    done()
  })

  it('should create hero', async done => {
    const response = await request(app)
      .post('/api/v1/heroes')
      .set('Authorization', `bearer ${token}`)
      .send({
        name: `Zorro${Date.now()}`,
        class: 'S',
        latitude: -23.5506507,
        longitude: -46.6333824
      })
    expect(response.status).toBe(201)
    done()
  })

  it('should alter hero', async done => {
    const response = await request(app)
      .get(`/api/v1/heroes/${hero._id}`)
      .set('Authorization', `bearer ${token}`)
      .send({ name: `Zé${Date.now()}` })
    expect(response.status).toBe(200)
    done()
  })

  it('should return list all heroes', async done => {
    const response = await request(app)
      .get('/api/v1/heroes')
      .set('Authorization', `bearer ${token}`)
    expect(response.status).toBe(200)
    done()
  })

  it('should show one hero', async done => {
    const response = await request(app)
      .get(`/api/v1/heroes/${hero._id}`)
      .set('Authorization', `bearer ${token}`)
    expect(response.status).toBe(200)
    done()
  })

  it('should delete hero', async done => {
    const response = await request(app)
      .delete(`/api/v1/heroes/${hero._id}`)
      .set('Authorization', `bearer ${token}`)
    expect(response.status).toBe(204)
    done()
  })
})
