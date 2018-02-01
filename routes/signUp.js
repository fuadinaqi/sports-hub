const express     = require('express')
const router      = express.Router()
const Model       = require('../models');

const Person      = Model.Person
const SportLists  = Model.SportLists

router.get('/', (req, res) => {
  SportLists.findAll()
  .then(rowSportList => {
    res.render('signUp', {
      rowSportList : rowSportList,
      err : false
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/', (req, res) => {
  let objSignUp = {
      email           : req.body.email,
      password        : req.body.password,
      name            : req.body.name,
      location        : req.body.location,
      email           : req.body.email,
      sport_interest  : req.body.sportName,
      phone           : req.body.phone
    }
  Person.create(objSignUp)
  .then(() => {
    res.redirect('/login')
  })
  .catch(err => {
    SportLists.findAll()
    .then(rowSportList => {
      // res.send(err.errors[0].message)
      res.render('signUp', {
        rowSportList : rowSportList,
        err : err.errors[0].message
      })
    })
    .catch(err => {
      res.send(err)
    })
  })
})

//sign out nya blm

module.exports = router
