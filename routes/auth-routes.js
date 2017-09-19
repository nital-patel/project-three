const express = require ('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authhelpers = require('../services/auth/auth-helper');
const usersControoler = require('../controllers/users-controller');

authRouter.get('/login', authhelper.loginRedirect, (req, res) => {
  
})