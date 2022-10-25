import { Question } from "../models/question.js"
import { Profile } from "../models/profile.js"

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  req.body.author = req.user.profile
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

const createAnswer = async (req, res) => {
  try {
    req.body.author = req.user.profile
    const question = await Question.findById(req.params.id)
    question.answers.push(req.body)
    await question.save()
    
    const newAnswer = question.answers[question.answers.length - 1]
    
    const profile = await Profile.findById(req.user.profile)
    newAnswer.author = profile

    res.status(201).json(newAnswer)
  } catch (err) {
    res.status(500).json(err)
  }
}

const updateAnswer = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId)
    const answer = question.answers.id(req.params.answerId)
    answer.answer = req.body.answer
    await question.save()
    res.status(200).json(question)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteAnswer = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId)
    question.answers.remove({ _id: req.params.answerId })
    await question.save()
    res.status(200).json(question)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  create,
  show,
  index,
  deleteQuestion as delete,
  updateQuestion as update,
  createAnswer,
  updateAnswer,
  deleteAnswer,
}