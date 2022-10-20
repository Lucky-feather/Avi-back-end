import mongoose from "mongoose"

const Schema = mongoose.Schema

const birdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  }
},
  {timestamps: true}
)

const Bird = mongoose.model('Bird', birdSchema)

export { Bird }