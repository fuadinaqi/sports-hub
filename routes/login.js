const express     = require('express')
const router      = express.Router()
const session     = require('express-session')
const Model       = require('../models');

const Person      = Model.Person
const PeopleAgendas = Model.PeopleAgendas
const SportList   = Model.SportLists
//
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
  .then(() => {
    // console.log(req.session);
    req.session.isLogin = true
    res.redirect('/')
  })
  .catch(err => {
    res.redirect('/login')
  })
})

//sign out nya blm

module.exports = router
