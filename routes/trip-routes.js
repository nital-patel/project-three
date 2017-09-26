const express = require('express');
const tripController = require('../controllers/trip-controller');
const tripRouter = express.Router();
const authHelper = require('../services/auth/auth-helper');


tripRouter.post('/', tripController.create);

tripRouter.delete('/:id', tripController.destroy);


tripRouter.get('/:id', tripController.show);

tripRouter.get('/:id/edit', tripController.edit);

tripRouter.put('/:id',  tripController.update);

module.exports = tripRouter;

