const db = require('../db/config');

const Trip = {};

Trip.findById = id => {
  return db.oneOrNone(`

    SELECT * FROM Trips WHERE user_id = $1
    JOIN users ON users.id = user_id
    JOIN hotels ON Hotels.id= hotel_id
    JOIN flights ON Flights.id = flight_id` , [id]);
}


Trip.update = (Trips, id) => {
  return db.none(
    `
      UPDATE Trips SELECT

    `,


    )
}
