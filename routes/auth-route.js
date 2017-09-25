const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helper');
const usersController = require('../controllers/users-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.redirect('auth/login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: 'auth/success',
    failureRedirect: 'auth/failure',
    failureFlash: true,
  })
);


authRouter.post('/register', usersController.create);

authRouter.get('/success', (req, res) => {
    res.json({
        auth: true,
        message: 'ok',
        user: req.user,

    })
})

authRouter.get('/failure', (req, res) => {
    res.json({
        auth: false,
        message: 'login failed',
        user: null,
    })
})



authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
