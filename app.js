const express         = require('express')
const Model           = require('./models')
const session         = require('express-session')
const favIcon         = require('express-favicon')
const app             = express()
const bodyParser      = require('body-parser')

const Person          = require('./routes/person');
const Agenda          = require('./routes/agenda');
const SportList       = require('./routes/sport_list');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home')
})

app.use('/people', Person)
app.use('/agendas', Agenda)
app.use('/sport_lists', SportList)

app.listen(3000, console.log(`Ready.. Set.. GO!`))
