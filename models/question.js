import mongoose from "mongoose"

const Schema = mongoose.Schema

const answerSchema = new Schema ({
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  text: {
    type: String,
    required: true,
    },
  }, {
  timestamps: true
})

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  author: { type: Schema.Types.ObjectId, ref: 'Profile'},
  answers: [answerSchema]
},
  {timestamps: true}
)

const Question = mongoose.model('Question', questionSchema)

export { Question }