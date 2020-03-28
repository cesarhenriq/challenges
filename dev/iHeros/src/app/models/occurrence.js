import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const OccurrenceShema = new mongoose.Schema({
  monsterName: { type: String, required: true },
  dangerLevel: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  heroes: [{ type: String, required: true }]
})

OccurrenceShema.plugin(mongoosePaginate)

export default mongoose.model('Occurrence', OccurrenceShema)
