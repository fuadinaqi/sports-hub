const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const Person      = Model.Person
const Agenda      = Model.Agenda
const SportList   = Model.SportLists

//code here
router.get('/', (req, res) => {
  Person.findAll({
    include: [Agenda]
  }) //select all data in person
  .then(rowPeople => {
    // res.send({rowPeople})
    res.render('person', {rowPeople: rowPeople})
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  Person.findAll().then(rowPeople => {
    res.render('person_add', {rowPeople: rowPeople, err: false})
  })
    .catch(err => {
      res.send(err)
    })
})

router.post('/add', (req, res) => {
  let objNewPerson = {
    name            : req.body.name,
    location        : req.body.location,
    email           : req.body.email,
    sport_interest  : req.body.sport_interest,
    phone           : req.body.phone,
    err             : false
  }
  Person.create(objNewPerson)
  .then(() => {
    res.redirect('/people')
  })
  .catch(err => {
    Person.findAll().then(rowPeople => {
      res.render('person_add', {rowPeople: rowPeople, err: err.message})
    })
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  Person.findById(id)
  .then(dataPerson => {
    res.render('person_edit', {dataPerson: dataPerson})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req,res) => {
  let id = req.params.id
  let objNewPerson = {
    name            : req.body.name,
    location        : req.body.location,
    email           : req.body.email,
    sport_interest  : req.body.sport_interest,
    phone           : req.body.phone,
  }
  Person.update(objNewPerson, {
    where: {id}
  })
  .then(() => {
    res.redirect('/people')
  })
  .catch(err => {
    Person.findAll().then(rowPeople => {
      res.render('person_edit', {rowPeople: rowPeople, err: err.message})
    })
  })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  Person.destroy({ //delete data person
    where : {id}
  })
  .then(() => {
    res.redirect('/people')
  })
  .catch(err => {
    res.send(err)
  })
})


module.exports = router;
