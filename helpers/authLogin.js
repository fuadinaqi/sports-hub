function checkLogin(req, res, next) {
  let isLogin = req.session.isLogin
  // let isLogin = true
  if (isLogin) {
    next()
  } else {
    if (req.session.isLoginUser) {
      res.redirect('/events')
    } else {
      res.redirect('/login')
    }
  }
}

function checkLoginUser(req, res, next) {
    let isLoginUser = req.session.isLoginUser
    // let isLoginUser = true
    if (isLoginUser) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = {checkLogin, checkLoginUser};
