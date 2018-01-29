const express     = require('express')
const router      = express.Router()
const Model       = require('../models');

const Person      = Model.Person

router.get('/', (req, res) => {
  res.render('signUp')
})

router.post('/', (req, res) => {
  let objSignUp = {
      email           : req.body.email,
      password        : req.body.password,
      name            : req.body.name,
      location        : req.body.location,
      email           : req.body.email,
      sport_interest  : req.body.sport_interest,
      phone           : req.body.phone
    }
  Person.create(objSignUp)
  .then(() => {
    res.redirect('/login')
  })
  .catch(err => {
    res.send(err)
  })
})

//sign out nya blm

module.exports = router
