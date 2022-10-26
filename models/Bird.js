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
  photo: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId, ref: 'Profile'
  }
},
  {timestamps: true}
)

const Bird = mongoose.model('Bird', birdSchema)

export { Bird }