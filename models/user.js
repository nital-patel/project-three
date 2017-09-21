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
    (username, email, password_digest)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [user.username, user.email, user.password_digest]);
};

User.findUserWaves = id => {
  return db.manyOrNone(`
    SELECT * FROM trips
    INNER JOIN users ON users.id = trips.user_id
    INNER JOIN flights ON flights.id = trips.flight_id
    INNER JOIN hotels ON hotels.id = trips.hotel_id
    WHERE user_id = $1
  `, [id]);
};

module.exports = User;
