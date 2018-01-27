const express     = require('express')
const router      = express.Router()
const Model       = require('../models')

router.get('/', (req, res) => {
  Model.Agenda.findAll()
  .then(rowAgendas => {
    res.send(rowAgendas)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
