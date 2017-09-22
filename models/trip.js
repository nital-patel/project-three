const db = require('../db/config');

const Trip = {};

Trip.create = (trip, user_id, flight_id, hotel_id) => {
  return db.one(
    `
      INSERT INTO trips
      (user_id, flight_id, hotel_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [user.id, flight.id, hotel.id]
  );
};


Trip.update = (Trips, id) => {
  return db.none(
    `
      UPDATE Trips SET
      flight_id = $1,
      hotel_id = $2
      WHERE id = $3
    `,
    [Trips.flight_id, Trips.hotel_id, id]
  );
};

Trip.destroy = id => {
  return db.none(
    `
      DELETE FROM Trips
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Trip;
