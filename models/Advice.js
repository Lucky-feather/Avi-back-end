import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema ({
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  content: String,
}, {
  timestamps: true
})

const adviceSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
},
  {timestamps: true}
)

const Advice = mongoose.model('Advice', adviceSchema)

export { Advice }