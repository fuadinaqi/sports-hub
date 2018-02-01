const express       = require('express')
const router        = express.Router()
const session       = require('express-session')
const Model         = require('../models');
const bcrypt        = require('bcrypt');

const Agenda        = Model.Agenda
const Person        = Model.Person
const PeopleAgendas = Model.PeopleAgendas
const SportList     = Model.SportLists

router.use(session({
    secret: 'key'
}))

router.get('/', (req, res) => {
  res.render('login', {
    err : false
  })
})

router.post('/', (req, res) => {
  let objLogin = {
    email   : req.body.email,
    password: req.body.password
  }
  Person.findOne({
    where : {email : objLogin.email}
  })
  .then((dataPerson) => {
    if (dataPerson !== null) {
      bcrypt.compare(objLogin.password, dataPerson.password).then(function(result) {
        if (result) {
            if (objLogin.email == 'adhiarta@gmail.com' || objLogin.email == 'fuadi@gmail.com') {
              req.session.isLoginUser = true
              req.session.isLogin     = true
              req.session.idPerson    = dataPerson.id
              req.session.name        = dataPerson.name
              res.redirect('/')
            } else {
              req.session.isLoginUser = true
              req.session.idPerson    = dataPerson.id
              req.session.name        = dataPerson.name
              res.redirect('/events')
            }
        } else {
          res.render('login', {
            err : 'You entered wrong password!'
          })
        }
      });
    } else {
      res.render('login', {
        err : 'You entered wrong email!'
      })
    }
  })
  .catch(err => {
    res.redirect('/login')
  })
})

module.exports = router
