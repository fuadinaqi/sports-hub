const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const session     = require('express-session')

const Agenda      = Model.Agenda
const Person      = Model.Person
const PeopleAgendas = Model.PeopleAgendas
const SportLists  = Model.SportLists

router.get('/', (req, res) => {
  Agenda.findAll({
    include : [SportLists]
  })
  .then(rowAgendas => {
    PeopleAgendas.findAll()
    .then(rowPeopleAgendas => {
      res.render('event', {
        rowAgendas : rowAgendas,
        rowPeopleAgendas  : rowPeopleAgendas,
        dataPerson : req.session
      })
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/join', (req, res) => {
  let objCreate = {
    AgendaId : req.body.AgendaId,
    PersonId : req.body.PersonId
  }

  PeopleAgendas.create(objCreate)
  .then(() => {
    res.redirect('/events')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
