const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  if (req.user) return res.status(200).json({
      message: "login success"
  });
  return next();
}

function loginRequired(req, res, next) {
    if (!req.user) return res.status(401).json({
      message: "Login Required"
    });
    return next();
}

module.exports = {
    comparePass,
    loginRedirect,
    loginRequired
};

