const express = require('express');
const flightController = require('../controllers/flights-controller');
const flightRouter = express.Router();


flightRouter.get('/:id/edit', flightController.edit);

flightRouter.put('/:id',  flightController.update);

module.exports = flightRouter;