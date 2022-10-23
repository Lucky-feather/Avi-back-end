import { Question } from "../models/question.js"

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Question.create(req.body)
  .then(question => {
    res.json(question)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}


function show(req, res) {
  Question.findById(req.params.id)
  .then(question => {
    res.json(question)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index(req, res) {
  Question.find({})
  .then(questions => {
    res.json(questions)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteQuestion(req, res) {
  Question.findByIdAndDelete(req.params.id)
  .then(deletedQuestion=> {
    res.json(deletedQuestion)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function updateQuestion(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Question.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedQuestion => {
    res.json(updatedQuestion)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function createAnswer(req,res) {


}
export {
  create,
  show,
  index,
  createAnswer,
  deleteQuestion as delete,
  updateQuestion as update
}