const express     = require('express')
const router      = express.Router()
const session     = require('express-session')
const Model       = require('../models');
router.use(session({
    secret: 'key'
}))

router.get('/', (req, res) => {
  req.session.destroy(function (err) {
    if (!err) {
      res.redirect('/')
    } else {
      res.send(err)
    }
  })
})

module.exports = router
