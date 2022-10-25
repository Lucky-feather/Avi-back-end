import { SupplyList } from '../models/supplylist.js'

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  req.body.owner = req.user.profile
  SupplyList.create(req.body)
  .then(supplyList => {
    res.json(supplyList)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}


function show(req, res) {
  SupplyList.findById(req.params.id)
  .then(supplyList => {
    res.json(supplyList)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index(req, res) {
  SupplyList.find({})
  .then(supplyLists => {
    res.json(supplyLists)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteSupplyList(req, res) {
  SupplyList.findByIdAndDelete(req.params.id)
  .then(deletedSupplyList => {
    res.json(deletedSupplyList)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function updateSupplyList(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  SupplyList.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedSupplyList => {
    res.json(updatedSupplyList)
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
  deleteSupplyList as delete,
  updateSupplyList as update
}