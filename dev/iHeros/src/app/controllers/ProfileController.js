import ProfileModel from '../models/user'

export default {
  index: async (req, res) => {
    try {
      const user = await ProfileModel.findById(req.userId)

      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized access'
        })
      }

      res.json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error displaying users list' })
    }
  },

  update: async (req, res) => {
    try {
      const user = await ProfileModel.findOneAndUpdate(
        { _id: req.userId },
        req.body
      )

      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized access'
        })
      }
      res.json({
        data: req.body
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        message: 'Error when updating user'
      })
    }
  },
  destroy: async (req, res) => {
    try {
      const user = await ProfileModel.findByIdAndDelete(req.userId)

      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized access'
        })
      }
      res.status(204).json()
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'User does not exist' })
    }
  }
}
