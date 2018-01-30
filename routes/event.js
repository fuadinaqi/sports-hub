const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const session     = require('express-session')
const moment        = require('moment');
const today         = moment().format('L');//get today's date
let arrToday        = today.split('/') //arrange date format
const thisDay       = arrToday.reverse().join('-')//arrange date format

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
    //here send email
    Agenda.findById(objCreate.AgendaId)
    .then(dataAgenda => {
      dataAgenda.max_player -= 1
      Agenda.update({
        max_player : dataAgenda.max_player
      },{
        where : {id : dataAgenda.id}
      })
      .then(() => {
        res.redirect('/events')
      })
      .catch(err => {
        res.send(err)
      })
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  SportLists.findAll()
  .then(rowSportList => {
    res.render('event_add', {
      rowSportList: rowSportList
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/add', (req, res) => {
  let objCreate = {
    name        : req.body.name,
    place       : req.body.place,
    date        : req.body.date,
    time        : req.body.time,
    max_player  : req.body.max_player,
    SportListId : req.body.sportListId,
    hostId      : req.session.idPerson
  }
  Agenda.create(objCreate) //insert data agenda
  .then(() => {
    res.redirect('/events')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/profile', (req, res) => {
  Agenda.findAll({
    include : [Model.SportLists, Model.Person],
    where   : {hostId : req.session.idPerson}
  })
  .then(rowAgendas => {
    res.render('event_profil', {
      rowAgendas : rowAgendas
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/profile/edit/:id', (req, res) => {
  let id = req.params.id
  Agenda.findById(id)
  .then(dataAgenda => {
    SportLists.findAll()
    .then(dataSports => {
      res.render('event_edit', {
        dataAgenda : dataAgenda,
        dataSports : dataSports,
        today      : thisDay,
        err        : false
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

router.post('/profile/edit/:id', (req, res) => {
  let id = req.params.id
  let objEdit = {
    name        : req.body.name,
    place       : req.body.place,
    date        : req.body.date,
    time        : req.body.time,
    max_player  : req.body.max_player,
    SportListId : req.body.sportListId
  }
  Agenda.update(objEdit, { //update data agenda
    where: { id }
  })
  .then(() => {
    res.redirect('/events')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/profile/delete/:id', (req, res) => {
  let id = req.params.id
  Agenda.destroy({ //delete data agenda
    where : { id }
  })
  .then(() => {
    res.redirect('/events')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
