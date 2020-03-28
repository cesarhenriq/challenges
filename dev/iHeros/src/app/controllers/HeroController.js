import HeroModel from '../models/hero'

export default {
  index: async (req, res) => {
    try {
      const heroes = await HeroModel.paginate(
        {},
        {
          page: req.query.page || 1,
          limit: req.query.limit || 20
        }
      )

      res.json(heroes)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error displaying heroes list' })
    }
  },
  show: async (req, res) => {
    try {
      const hero = await HeroModel.findById(req.params.id)
      if (!hero) {
        return res.status(404).json({
          message: 'Hero does not exist'
        })
      }
      return res.json({ data: hero })
    } catch (error) {
      console.error(error.name)
      if (error.name === 'CastError') {
        return res.status(404).json({
          message: 'Hero does not exist'
        })
      }

      return res.status(500).json({
        message: 'Error returning Hero'
      })
    }
  },

  create: async (req, res) => {
    try {
      const hero = await HeroModel.create(req.body)

      return res.status(201).json(hero)
    } catch (error) {
      console.error(error)

      if (error.name === 'ValidationError') {
        return res.status(400).json({
          message: error.message
        })
      }
      return res
        .status(500)
        .json({ message: 'Error when registering new Hero' })
    }
  },

  update: async (req, res) => {
    try {
      await HeroModel.updateOne({ _id: req.params.id }, req.body)
      res.json({
        data: req.body
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        message: 'Error when updating Hero'
      })
    }
  },

  destroy: async (req, res) => {
    try {
      await HeroModel.findByIdAndDelete(req.params.id)
      res.status(204).json()
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Hero does not exist' })
    }
  }
}
