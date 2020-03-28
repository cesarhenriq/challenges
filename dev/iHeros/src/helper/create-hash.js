import Bcryptjs from 'bcryptjs'

const createHash = async password => {
  return new Promise((resolve, reject) => {
    Bcryptjs.genSalt(10, (error, salt) => {
      if (error) return reject(error)
      Bcryptjs.hash(password, salt, (error, hash) => {
        if (error) return reject(error)
        return resolve(hash)
      })
    })
  })
}

export default createHash
