const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const session     = require('express-session')
const moment      = require('moment');
const today       = moment().format('L');//get today's date
let arrToday      = today.split('/') //arrange date format
const thisDay     = arrToday.reverse().join('-')//arrange date format
const api_key     = 'key-25fc0a73025b3329627740cc582f9021';
const domain      = 'sandboxb33efd7116d9434ab04cbd7bc49c1833.mailgun.org';
const mailgun     = require('mailgun-js')({apiKey: api_key, domain: domain});

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
        Agenda.findOne({
          where : { max_player : 0, id : objCreate.AgendaId }
        })
        .then((agenda) => {
          if (agenda) {
            // console.log('asdasdsadasdasd', agenda);
            Agenda.findOne({
              include : [Person],
              where   : { id : agenda.id }
            })
            .then(Agenda => {
              Agenda.People.forEach(person => {
                var data = {
                  from: 'Sports Hub Fuadhi <postmaster@sandboxb33efd7116d9434ab04cbd7bc49c1833.mailgun.org>',
                  to: person.email,
                  subject: 'Hello From Sports Hub',
                  text: `Congrats! Your Event ${Agenda.name} is fully booked`
                };

                mailgun.messages().send(data, function (error, body) {
                  console.log('body ..',body);
                  console.log('error ..',error);
                });
              })
              Person.findOne({
                where : { id : Agenda.hostId }
              })
              .then(dataHost => {
                var data = {
                  from: 'Sports Hub Fuadhi <postmaster@sandboxb33efd7116d9434ab04cbd7bc49c1833.mailgun.org>',
                  to: dataHost.email,
                  subject: 'Hello From Sports Hub',
                  text: `Congrats! Your Event ${Agenda.name} is fully booked, please contact your participants`
                };

                mailgun.messages().send(data, function (error, body) {
                  console.log('body ..',body);
                  console.log('error ..',error);
                });
                res.redirect('/events')
              })
              .catch(err => {
                res.send(err)
              })
              // res.send(rowPersonEmail)
              // res.redirect('/events')
            })
            .catch(err => {
              res.send(`haii eror ${err}`)
            })
          } else {
            res.redirect('/events')
          }
        })
        .catch(err => {
          res.redirect('/events')
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
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  SportLists.findAll()
  .then(rowSportList => {
    res.render('event_add', {
      rowSportList: rowSportList,
      today       : thisDay,
      err         : false
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
    SportLists.findAll()
    .then(rowSportList => {
      res.render('event_add', {
        rowSportList: rowSportList,
        today       : thisDay,
        err         : err.message
      })
    })
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
