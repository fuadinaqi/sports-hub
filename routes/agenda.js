const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const PersonAgendas = Model.PersonAgendas
const SportList   = Model.SportLists
const Agenda      = Model.Agenda
const Person      = Model.Person

router.get('/', (req, res) => {
  Agenda.findAll({
    include: [Model.SportLists, Model.Person]
  }) // select all data agendas
  .then(rowAgendas => {
    // res.send(rowAgendas)
    res.render('agenda', {
      rowAgendas : rowAgendas
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  SportList.findAll().then(rowSportList => {
    res.render('agenda_add', {rowSportList: rowSportList})
  })
})

router.post('/add', (req, res) => {
  let objCreate = {
    name        : req.body.name,
    place       : req.body.place,
    date        : req.body.date,
    time        : req.body.time,
    max_player  : req.body.max_player,
    SportListId : req.body.sportListId
  }
  Agenda.create(objCreate) //insert data agenda
  .then(() => {
    res.redirect('/agendas')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  Agenda.findById(id)
  .then(dataAgenda => {
    SportList.findAll()
    .then(dataSports => {
      res.render('agenda_edit', {
        dataAgenda : dataAgenda,
        dataSports : dataSports
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

router.post('/edit/:id', (req, res) => {
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
    res.redirect('/agendas')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  Agenda.destroy({ //delete data agenda
    where : { id }
  })
  .then(() => {
    res.redirect('/agendas')
  })
  .catch(err => {
    res.send(err)
  })
})



module.exports = router;
