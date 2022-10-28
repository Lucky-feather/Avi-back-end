import mongoose from "mongoose"

const Schema = mongoose.Schema

const eventSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, ref: 'Profile'
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  details: {
    type: String,
    required: true,
  }
},
  {timestamps: true}
)

const Event = mongoose.model('Event', eventSchema)

export { Event }
