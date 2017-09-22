const db = require('../db/config');

const Hotel = {};

//john work
Hotel.show = (hotel,id) =>{
  return db.oneOrNone(
  `SELECT * FROM Hotels 
  WHERE city_id = $1
  `,[id]
  );
};
//

Hotel.update = (hotel, id) => {

  return db.none(`

    UPDATE Hotels SET
    name = $1,
    rating = $2,
    city = $3,
    WHERE id = $4
    `,
    [hotel.name, hotel.rating, hotel.city, id]
    );
};

Hotel.destroy = id => {
  return db.none(
    `
      DELETE FROM Hotels
      WHERE id = $1
    `,
    [id]
  );
};
module.exports = Hotel;
