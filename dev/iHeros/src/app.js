import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'

import config from './config/config'
import auth from './routes/auth'
import routes from './routes/routes'
import './database'

const app = express()

const validateToken = (req, res, next) => {
  const hash = req.headers.authorization

  if (!hash) {
    return res.status(401).json({
      message: 'Unauthorized access'
    })
  }
  const token = hash.split(' ')

  if (!token.length === 2) {
    return res.status(401).json({
      message: 'Unauthorized access'
    })
  }

  jwt.verify(token[1], config.secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message: 'Token invalid'
      })
    }
    req.userId = decoded.id
    req.email = decoded.email

    next()
  })
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', auth)
app.use('/api/v1/', validateToken, routes)

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'route not found 404'
  })
})

export default app
