const Trip = require('../models/trip');
<<<<<<< HEAD

const TripController = {};


const TripController = {};

TripController.create = (req, res) => {
  console.log(req.body.tripName)
  Trip.create({
    trip_name: req.body.tripName,
    flight_id: req.body.flightno,
    hotel_id: req.body.hotelId,
    user_id: req.body.userId
  }).then(trip => {
    res.json({trip:trip})

  })
  .catch(err => {
    res.status(400).json(err);
    console.log(err);
  })
}


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
      trip_name: req.body.id,
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

TripController.findById = () => {
  Trip.findById()
  .then(trip => {
    res.render(`/userprofile/${req.params.id}`)
  }).catch(err => {
      res.status(400).json(err);
    });
}
module.exports = TripController;
