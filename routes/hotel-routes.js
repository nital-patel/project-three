const express = require('express');
const hotelController = require('../controller/hotel-controller');
const hotelRouter = express.Router();


hotelRouter.get('/:id/edit', hotelController.edit)

hotelRouter.put('/:id',  hotelController.update)
