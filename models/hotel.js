const db = require('../db/config');

const Hotel = {};

Hotel.update = (hotel, id) => {

  return db.none(`

    UPDATE hotel SET
    name = $1,
    rating = $2,
    city = $3,
    WHERE id = $4
    `,
    [hotel.name, hotel.rating, hotel.city, id]
    );
};

module.exports = Flight;
