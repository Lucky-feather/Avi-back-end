import mongoose from "mongoose"

const Schema = mongoose.Schema

const eventSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId, ref: 'Profile'
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  date: Date,
  description: {
    type: String,
    required: true,
  }
},
  {timestamps: true}
)

const Event = mongoose.model('Event', eventSchema)

export { Event }