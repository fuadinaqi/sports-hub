const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const SportLists  = Model.SportLists

router.get('/', (req, res) => {
  SportLists.findAll() // select all data sport
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
  res.render('sport_list_add', {err: false})
})

router.post('/add', (req, res) => {
  let objCreate = {
    name        : req.body.name,
  }
  SportLists.create(objCreate) //insert data sport
  .then(() => {
    res.redirect('/sport_lists')
  })
  .catch(err => {
    SportLists.findAll().then(rowSportList => {
      res.render('sport_list_add', {rowSportList: rowSportList, err: err.errors[0].message})
    })
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  SportLists.findById(id)
  .then(dataSportList => {
    res.render('sport_list_edit', {
      dataSportList : dataSportList,
      err           : false
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req, res) => {
  let id = req.params.id
  let objEdit = {
    name        : req.body.name
  }
  SportLists.update(objEdit, { //update data sport
    where: { id }
  })
  .then(() => {
    res.redirect('/sport_lists')
  })
  .catch(err => {
    SportLists.findAll().then(rowSportList => {
      res.render('sport_list_add', {rowSportList: rowSportList, err: err.errors[0].message})
    })
  })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  SportLists.destroy({ //delete data sport
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
