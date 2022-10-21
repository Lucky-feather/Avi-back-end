import mongoose from 'mongoose'

const Schema = mongoose.Schema

const birdbookSchema = new Schema({
  seen: [{type: Schema.Types.ObjectId, ref: 'Bird'}],
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Bird'}],
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  photo: String,
  birdbook: [birdbookSchema],
  events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
  supplylist: { type: Schema.Types.ObjectId, ref: 'Supplylist'},
},{
  timestamps: true, 
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }