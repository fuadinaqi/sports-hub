const express         = require('express')
const Model           = require('./models')
const session         = require('express-session')
const favIcon         = require('express-favicon')
const app             = express()
const bodyParser      = require('body-parser')

const authLogin       = require('./helpers/authLogin')
const Person          = require('./routes/person');
const Agenda          = require('./routes/agenda');
const SportList       = require('./routes/sport_list');
const Login           = require('./routes/login');
const SignUp          = require('./routes/signUp');
const Events          = require('./routes/event')
const Logout          = require('./routes/logout');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'key'
}))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', authLogin.checkLogin, function (req, res) {
  res.render('home')
})

app.use('/login', Login)
app.use('/signUp', SignUp)
app.use('/logout', authLogin.checkLoginUser, Logout)
app.use('/people', authLogin.checkLogin, Person)
app.use('/agendas', authLogin.checkLogin, Agenda)
app.use('/sport_lists', authLogin.checkLogin, SportList)
app.use('/events', authLogin.checkLoginUser, Events)

app.listen(3000, console.log(`Ready.. Set.. GO!`))
