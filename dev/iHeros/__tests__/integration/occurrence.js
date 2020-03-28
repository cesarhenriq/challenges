import request from 'supertest'

import '../../src/database'
import app from '../../src/app'
import UseModel from '../../src/app/models/user'
import OccurrenceModel from '../../src/app/models/occurrence'
import createToken from '../../src/helper/create-token'

let user = ''
let token = ''
let occurrence = ''

beforeAll(async () => {
  user = await UseModel.create({
    name: `user teste${Date.now()}`,
    email: `${Date.now()}@mail.com`,
    password: `123456`
  })

  occurrence = await OccurrenceModel.create({
    monsterName: 'Spiritmouth',
    dangerLevel: 'God',
    latitude: 45.60714557880993,
    longitude: 18.917913367405173,
    heroes: ['Batman', 'Dead Pool']
  })

  token = await createToken(user.id, user.email)
})

describe('Endpoit Occurrence', () => {
  it('should return unauthorized', async done => {
    const response = await request(app).get('/api/v1/occurrences')
    expect(response.status).toBe(401)
    done()
  })

  it('should list all occurrences', async done => {
    const response = await request(app)
      .get('/api/v1/occurrences')
      .set('Authorization', `bearer ${token}`)

    expect(response.status).toBe(200)
    done()
  })

  it('should show one occurrence', async done => {
    const response = await request(app)
      .get(`/api/v1/occurrences/${occurrence._id}`)
      .set('Authorization', `bearer ${token}`)
    expect(response.status).toBe(200)
    done()
  })
})
