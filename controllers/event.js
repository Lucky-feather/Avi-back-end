import { Event } from "../models/event.js"


function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  req.body.owner = req.user.profile
  Event.create(req.body)
  .then(event => {
    res.json(event)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}


function show(req, res) {
  Event.findById(req.params.id)
  .then(event => {
    res.json(event)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index(req, res) {
  Event.find({})
  .then(events => {
    res.json(events)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id)
  .then(deletedEvent => {
    res.json(deletedEvent)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function updateEvent(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedEvent => {
    res.json(updatedEvent)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}


export {
  create,
  show,
  index,
  deleteEvent as delete,
  updateEvent as update
}