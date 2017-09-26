const Flight = require('../models/flights');

const flightController = {};

flightController.create = (req, res) => {

   console.log(req.body.arrtime,
    req.body.origin,
    req.body.depa_time,
    req.body.duration,
    req.body.destination,
    req.body.airline);

  Flight.create({
    flightno: req.body.flightno,
    arrtime: req.body.arrtime,
    origin: req.body.origin,
    depa_time: req.body.depa_time,
    duration: req.body.duration,
    destination: req.body.destination,
    airline: req.body.airline,
    //totalfare: req.body.totalfare,
    seatsAvailable: req.body.seatsAvailable
  }, req.user.id)
  .then(flight => {
    // res.render('hotel search page')
   // console.log('Put hotel search page in the render above')
   res.redirect(`/flight/${flight.id}`);
  })
  .catch((err) => {
    res.status(400).json(err);
  })
}

flightController.edit = (req, res) => {
  Flight.findById(req.params.id)
    .then(flight => {
      res.render('flight/edit', { flight: flight })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

flightController.update = (req,res) => {

  Flight.update({
    flightno: req.body.flightno,
    arrtime: req.body.arrtime,
    origin: req.body.origin,
    depa_time: req.body.depa_time,
    duration: req.body.duration,
    destination: req.body.destination,
    airline: req.body.airline,
    totalfare: req.body.totalfare,
    seatsAvailable: req.body.seatsAvailable}, req.params.id)
    .then(() => {
      res.redirect(`/flight/${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
  });

};

flightController.destroy = (req, res) => {

  Flight.destroy(req.params.id)
    .then(() => {
      res.redirect('/user')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


module.exports = flightController;







