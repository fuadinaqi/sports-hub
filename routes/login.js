const express     = require('express')
const router      = express.Router()
const session     = require('express-session')
const Model       = require('../models');

const Agenda      = Model.Agenda
const Person      = Model.Person
const PeopleAgendas = Model.PeopleAgendas
const SportList   = Model.SportLists

router.use(session({
    secret: 'key'
}))

router.get('/', (req, res) => {
  res.render('login')
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
    if (objLogin.password == dataPerson.password) {
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
    }
  })
  .catch(err => {
    res.redirect('/login')
  })
})

module.exports = router
