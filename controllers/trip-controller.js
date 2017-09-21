const Receipe = require('../models/trip');

const TripController = {};


TripController.edit = (req, res) => {
  Trip.findById(req.params.id)
    .then(trip => {
      res.render('trip/edit', { trip: trip })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


TripController.update = (req, res) => {
  Trip.update({
      flight_id: req.body.id,
      hotel_id: req.body.id
    }, req.params.id)
    .then(() => {
      res.redirect(`/trip/${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


TripController.destroy = (req, res) => {
  Trip.destroy(req.params.id)
    .then(() => {
      res.redirect('/user')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
module.exports = TripController;
