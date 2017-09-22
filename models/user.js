const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest, salt)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [user.username, user.email, user.password_digest, user.salt]);
};

User.findUserTrips = id => {
  return db.manyOrNone(`
    SELECT * FROM Trips
    INNER JOIN users ON users.id = Trips.user_id
    INNER JOIN flights ON flights.id = Trips.flight_id
    INNER JOIN hotels ON hotels.id = Trips.hotel_id
    WHERE user_id = $1
  `, [id]);
};

module.exports = User;
