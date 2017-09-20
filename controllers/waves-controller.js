wavesController.create = (req, res) => {
  Wave.create({
    name: req.body.name,
    age: req.body.age,
    species: req.body.species,
    picture: req.body.picture,
  }, req.user.id).then(wave => {
    res.redirect(`/waves/${cat.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
