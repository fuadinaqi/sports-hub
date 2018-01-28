const express     = require('express')
const router      = express.Router()
const Model       = require('../models')

router.get('/', (req, res) => {
  Model.Agenda.findAll() // select all data agendas
  .then(rowAgendas => {
    res.render('agenda', {
      rowAgendas : rowAgendas
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  res.render('agenda_add')
  // sport id (list) nya belom
})

router.post('/add', (req, res) => {
  let objCreate = {
    name        : req.body.name,
    place       : req.body.place,
    date        : req.body.date,
    time        : req.body.time,
    max_player  : req.body.max_player
  }
  Model.Agenda.create(objCreate) //insert data agenda
  .then(() => {
    res.redirect('/agendas')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  Model.Agenda.findById(id)
  .then(dataAgenda => {
    res.render('agenda_edit', {
      dataAgenda : dataAgenda
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
    max_player  : req.body.max_player
  }
  Model.Agenda.update(objEdit, { //update data agenda
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
  Model.Agenda.destroy({ //delete data agenda
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
