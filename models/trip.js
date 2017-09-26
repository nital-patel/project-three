const db = require('../db/config');

const Trip = {};

Trip.create = (trip, flight, hotel, user) => {
  return db.one(
    `
      INSERT INTO Trips
      (trip_name, flight_id, hotel_id, user_id)
      VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [trip.trip_name, trip.flight_id, trip.hotel_id, trip.user_id]
  );
};

Trip.show = (user) =>{
  return db.manyOrNone(
    `
    SELECT * FROM trips JOIN hotels on hotels.id = hotel_id join flights ON flights.id = flight_id where user_id = $1
    ;
    
    `,[user]
  );
};

Trip.update = (Trips, id) => {
  return db.none(
    `
      UPDATE Trips SET
      trip_name = $1,
      flight_id = $2,
      hotel_id = $3,
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

Trip.findById = user => {
  return db.query (`
    SELECT * FROM trips
    WHERE user_id = $1
    `, [user]);
}

module.exports = Trip;
