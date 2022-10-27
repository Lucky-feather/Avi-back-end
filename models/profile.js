import mongoose from 'mongoose'

const Schema = mongoose.Schema



const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  about: String,
  supplyList: [{ type: Schema.Types.ObjectId, ref: 'Supplylist'}],
  seen: [{type: Schema.Types.ObjectId, ref: 'Bird'}],
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Bird'}],
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }