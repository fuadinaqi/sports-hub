function checkLogin(req, res, next) {
  // let isLogin = req.session.isLoginA
  let isLogin = req.session.isLogin
  if (isLogin) {
    next()
  } else {
    // if(req.session.isLogin == true) {
    //   res.redirect('/patients/sakit')
    // } else {
    //   res.redirect('/login')
    // }
    res.redirect('/login')
  }
}

module.exports = {checkLogin};
