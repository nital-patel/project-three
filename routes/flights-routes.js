const express = require('express');
const flightController = require('../controller/flight-controller');
const flightRouter = express.Router();


flightRouter.get('/:id/edit', flightController.edit)

flightRouter.put('/:id',  flightController.update)
