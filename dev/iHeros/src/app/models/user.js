import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcryptjs from 'bcryptjs'

const UserShema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }
})

UserShema.plugin(uniqueValidator)

UserShema.pre('save', async function (next) {
  const hash = await bcryptjs.hash(this.password, 10)
  this.password = hash
  next()
})

export default mongoose.model('User', UserShema)
