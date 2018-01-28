const express     = require('express')
const router      = express.Router()
const Model       = require('../models')

router.get('/', (req, res) => {
  Model.SportLists.findAll() // select all data sport
  .then(rowSportLists => {
    res.render('sport_list', {
      rowSportLists : rowSportLists
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  res.render('sport_list_add')
})

router.post('/add', (req, res) => {
  let objCreate = {
    name        : req.body.name,
  }
  Model.SportLists.create(objCreate) //insert data sport
  .then(() => {
    res.redirect('/sport_lists')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  Model.SportLists.findById(id)
  .then(dataSportList => {
    res.render('sport_list_edit', {
      dataSportList : dataSportList
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
  }
  Model.SportLists.update(objEdit, { //update data sport
    where: { id }
  })
  .then(() => {
    res.redirect('/sport_lists')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  Model.SportLists.destroy({ //delete data sport
    where : { id }
  })
  .then(() => {
    res.redirect('/sport_lists')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
