import OccurrenceModel from '../models/occurrence'

export default {
  index: async (req, res) => {
    try {
      const occurrences = await OccurrenceModel.paginate(
        {},
        {
          page: req.query.page || 1,
          limit: req.query.limit || 20
        }
      )

      res.json(occurrences)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error displaying ocurrences list' })
    }
  },
  show: async (req, res) => {
    try {
      const occurrence = await OccurrenceModel.findById(req.params.id)

      if (!occurrence) {
        return res.status(404).json({
          message: 'Ocurrence does not exist'
        })
      }
      return res.json(occurrence)
    } catch (error) {
      console.error(error.name)
      if (error.name === 'CastError') {
        return res.status(404).json({
          message: 'Occurrence does not exist'
        })
      }

      return res.status(500).json({
        message: 'Error returning Occurrence'
      })
    }
  },

  create: async (req, res) => {
    try {
      const occurrence = await OccurrenceModel.create(req.body)

      return res.status(201).json(occurrence)
    } catch (error) {
      console.error(error)

      if (error.name === 'ValidationError') {
        return res.status(400).json({
          message: error.message
        })
      }
      return res
        .status(500)
        .json({ message: 'Error when registering new Occurrence' })
    }
  },

  update: async (req, res) => {
    try {
      await OccurrenceModel.updateOne({ _id: req.params.id }, req.body)
      res.json({
        data: req.body
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        message: 'Error when updating Occurrece'
      })
    }
  },

  destroy: async (req, res) => {
    try {
      await OccurrenceModel.findByIdAndDelete(req.params.id)
      res.status(204).json()
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Occurrence does not exist' })
    }
  }
}
