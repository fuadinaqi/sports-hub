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
    password        : req.body.password,
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
      res.render('person_add', {rowPeople: rowPeople, err: err.errors[0].message})
    })
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  Person.findById(id)
  .then(dataPerson => {
    res.render('person_edit', {dataPerson: dataPerson, err : false})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req,res) => {
  let id = req.params.id
  let objNewPerson = {
    id              : req.params.id,
    name            : req.body.name,
    location        : req.body.location,
    email           : req.body.email,
    password        : req.body.password,
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
    let id = req.params.id
    Person.findById(id)
    .then(dataPerson => {
      res.render('person_edit', {dataPerson: dataPerson, err : err.errors[0].message})
    })
    .catch(err => {
      res.send(err)
    })
  })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  Person.destroy({
    where : {id}
  })
  .then(() => {
    Agenda.findOne({
      where : {hostId : id}
    })
    .then(dataAgenda => {
      if (dataAgenda != null) {
        Agenda.destroy({
          where : {id : dataAgenda.id}
        })
        .then(() => {
          res.redirect('/people')
        })
      } else {
        res.redirect('/people')
      }
    })
  })

})

module.exports = router;
