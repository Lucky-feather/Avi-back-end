import mongoose from "mongoose"

const Schema = mongoose.Schema

const supplySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, ref: 'Profile'
  },
  title: {
    type: String,
    required: true,
  },
  items: String,
  description: {
    type: String,
    required: true,
  }
},
  {timestamps: true}
)

const Supply = mongoose.model('Supply', supplySchema)

export { Supply }