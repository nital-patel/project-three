const express = require('express');
const tripController = require('../controllers/trip-controller');
const tripRouter = express.Router();

// tripRouter.get('/')

tripRouter.get('/:id/edit', tripController.edit);

tripRouter.put('/:id',  tripController.update);

module.exports = tripRouter;
