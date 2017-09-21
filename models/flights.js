const db = require('../db/config');

const Flight = {};

Flight.create = (flight, user_id) => {
  return db.one(
    `
      INSERT INTO flights
      (flightno, arrtime, origin, depa_time, duration, destination, airline, totalfare, seatsavailable)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
    `,
    [flight.flightno, flight.arrtime, flight.origin, flight.depa_time, flight.duration, flight.destination, flight.airline, flight.totalfare, flight.seatsavailable]
  );
};

Flight.update = (flight, id) => {

  return db.none(`

    UPDATE flight SET
    flightno = $1,
    arrtime = $2,
    origin = $3,
    depa_time = $4,
    duration = $5,
    destination = $6,
    airline = $7,
    totalfare = $8,
    seatsAvailable = $9
    WHERE id = $10
    `,
    [flight.flightno, flight.arrtime, flight.origin, flight.depa_time, flight.duration, flight.destination, flight.airline, flight.totalfare, flight.seatsAvailable,id]
    );
};

Flight.destroy = id => {
  return db.none(
    `
      DELETE FROM flights
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Flight;
