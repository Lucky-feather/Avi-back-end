import mongoose from 'mongoose'

const Schema = mongoose.Schema

const birdbookSchema = new Schema({
  name: String,
  seen: Boolean,
  wishlist: Boolean,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  photo: String,
  birdbook: [birdbookSchema]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }