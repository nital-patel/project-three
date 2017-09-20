const db = require('../db/config');

const Trip = {};



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
