const express = require('express');
const flightController = require('../controllers/flights-controller');
const flightRouter = express.Router();
const authHelper = require('../services/auth/auth-helper');

flightRouter.post('/', flightController.create);

flightRouter.get('/:id/edit', flightController.edit);

flightRouter.put('/:id',  flightController.update);

module.exports = flightRouter;