const express = require('express');
const hotelController = require('../controllers/hotel-controller');
const hotelRouter = express.Router();


//john work

hotelRouter.get('/:id', hotelController.show);
//

hotelRouter.get('/:id/edit', hotelController.edit);

hotelRouter.put('/:id',  hotelController.update);


module.exports = hotelRouter;
