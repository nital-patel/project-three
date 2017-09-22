const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
      salt: salt,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
      //.res.json({message: 'success' });
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}


usersController.index = (req, res) => {
  User.findUserTrips(req.user.id)
  .then(Trips => {
    res.json({
    user: req.user,
    data: 'Put a user profile on this route',
    });
 }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });

  }




module.exports = usersController;
