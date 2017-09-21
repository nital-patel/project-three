const Hotel = require('../models/hotel');

const hotelController = {};

//john work
hotelController.show = (req,res)=>{
  Hotel.show(req.params.id)
  .then(hotel =>{
    res.status('/:id').send({hotel:hotel})
  }).catch(err=>{
    res.status(400).json(err);
  })
};
//

hotelController.edit = (req, res) => {
  Hotel.findById(req.params.id)
    .then(hotel => {
      res.render('hotel/edit', { hotel: hotel })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

hotelController.update = (req,res) => {

  Hotel.update({
    name: req.body.name,
    rating: req.body.rating,
    city: req.body.city }, req.params.id)
    .then(() => {
      res.redirect(`/hotel/${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
  });

};

hotelController.destroy = (req, res) => {

  Hotel.destroy(req.params.id)
    .then(() => {
      res.redirect('/user')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
module.exports = hotelController;
