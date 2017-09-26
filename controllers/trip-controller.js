const Trip = require('../models/trip');
const Flight = require('../models/flights')
const TripController = {};

TripController.create = (req, res) => {
  console.log(req.body.tripName)
  // Flight.create({
  //   flightno: req.body.flightno,
  //   arrtime: req.body.arrtime,
  //   origin: req.body.origin,
  //   depa_time: req.body.depa_time,
  //   duration: req.body.duration,
  //   destination: req.body.destination,
  //   airline: req.body.airline
  // }).then(res => {
  //   console.log(res.json())
  // }).then( 
  Flight.recent()
  .then((req, res) => {
    req.body = res.locals.flightId
  })
  Trip.create({
    trip_name: req.body.tripName,
    flight_id: res.locals.flightId,
    hotel_id: req.body.hotelId,
    user_id: req.body.userId
  })
  .then(trip => {
    res.json({trip:trip})
  })
  .catch(err => {
    res.status(400).json(err);
    console.log(err);
  })
};

TripController.show = (req,res)=>{
  console.log('=======> this is trips show', req.params.id)
  Trip.show(req.params.id)
  .then(trip =>{
    console.log(trip)
    res.json({trip:trip})
  })
  .catch(err => {
    res.status(400).json(err);
    console.log(err);
  })
};

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
    .catch(err => {
      res.status(400).json(err);
    });
};

TripController.findById = () => {
  Trip.show()
  .then(trip => {
    res.render(`/userprofile/${req.params.id}`)
  }).catch(err => {
      res.status(400).json(err);
    });
}
module.exports = TripController;
