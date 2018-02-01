const express       = require('express')
const router        = express.Router()
const Model         = require('../models')
const PersonAgendas = Model.PersonAgendas
const SportList     = Model.SportLists
const Agenda        = Model.Agenda
const Person        = Model.Person
const moment        = require('moment');
const today         = moment().format('L');//get today's date
let arrToday        = today.split('/') //arrange date format
const thisDay       = arrToday.reverse().join('-')//arrange date format

router.get('/', (req, res) => {
  Agenda.findAll({
    include: [Model.SportLists, Model.Person]
  }) // select all data agendas
  .then(rowAgendas => {
    if (rowAgendas.length > 0) {
      let arr = []
      let count = 0
      let full = false
      rowAgendas.forEach(agenda => {
        if (agenda.max_player == 0) {
          full = true
        }
        let obj = {}
        Person.findById(agenda.hostId)
        .then(dataPerson => {
          if (dataPerson) {
            obj.id = dataPerson.id
            obj.name = dataPerson.name
            arr.push(obj)
          }
          if (rowAgendas.length-1 <= count) {
            // res.send(rowAgendas)
            res.render('agenda', {dataHost: arr, rowAgendas: rowAgendas, full : full})
          }
          count++
        })
        .catch(err => {
          res.send(err)
        })
      })
    } else {
      res.render('agenda', {dataHost: [], rowAgendas: rowAgendas, full : false})
    }
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  SportList.findAll().then(rowSportList => {
    res.render('agenda_add', {rowSportList: rowSportList, today: thisDay, err: false})
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
    // res.send(err.message)
    SportList.findAll().then(rowSportList => {
      res.render('agenda_add', {rowSportList: rowSportList, today: thisDay, err: err.errors[0].message})
    })
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
    let id = req.params.id
    Agenda.findById(id)
    .then(dataAgenda => {
      SportList.findAll()
      .then(dataSports => {
        res.render('agenda_edit', {
          dataAgenda : dataAgenda,
          dataSports : dataSports,
          today      : thisDay,
          err        : err.errors[0].message
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
