import jwt from 'jsonwebtoken'
import config from '../config/config'

const createToken = async (id, email) => {
  const token = await jwt.sign({ id, email }, config.secret, {
    expiresIn: 86400
  })

  return token
}

export default createToken
