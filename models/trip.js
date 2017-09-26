const db = require('../db/config');

const Trip = {};

Trip.create = (trip, user_id, flight, hotel) => {
  return db.one(
    `
      INSERT INTO Trips
      (trip_name, user_id, flight_id, hotel_id)
      VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [trip.trip_name, trip.user_id, trip.flight_id, trip.hotel_id]
  );
};


Trip.update = (Trips, id) => {
  return db.none(
    `
      UPDATE Trips SET
      trip_name = $1,
      flight_id = $2,
      hotel_id = $3
      WHERE id = $4
    `,
    [Trips.trip_name, Trips.flight_id, Trips.hotel_id, id]
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

Trip.findById = id => {
  return db.oneOrNone (`
    SELECT * FROM trips
    WHERE user_id = $1
    `, [id]);
}

module.exports = Trip;
