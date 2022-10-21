import mongoose from 'mongoose'

const Schema = mongoose.Schema

const birdbookSchema = new Schema({
  seen: [{type: Schema.Types.ObjectId, ref: 'Bird'}],
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Bird'}],
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: String,
  },
  about: String,
  birdbook: [birdbookSchema],
  supplylist: { type: Schema.Types.ObjectId, ref: 'Supplylist'},
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }