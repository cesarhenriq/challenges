import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const HeroShema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

HeroShema.plugin(mongoosePaginate);

export default mongoose.model("Hero", HeroShema);
