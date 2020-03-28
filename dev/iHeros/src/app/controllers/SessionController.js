import bcryptjs from 'bcryptjs'

import UserModel from '../models/user'
import createToken from '../../helper/create-token'

export default {
  create: async (req, res) => {
    try {
      const user = await UserModel.create(req.body)
      const token = await createToken(user._id, user.email)

      user.password = undefined

      return res.status(201).json({
        data: user,
        token
      })
    } catch (error) {
      console.error(error)

      if (error.name === 'ValidationError') {
        return res.status(400).json({
          message: error.message
        })
      }
      return res
        .status(500)
        .json({ message: 'Error when registering new user' })
    }
  },
  logon: async (req, res) => {
    try {
      const { email, password } = req.body

      const candidate = await UserModel.findOne({ email }).select('+password')

      if (!candidate) {
        return res.status(404).json({
          message: 'User does not exist'
        })
      }

      if (!(await bcryptjs.compare(password, candidate.password))) {
        return res.status(400).json({
          message: 'Email or password invalid '
        })
      }

      candidate.password = undefined

      const token = await createToken(candidate._id, email)

      return res.json({ token })
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Error auth candidate'
      })
    }
  }
}
