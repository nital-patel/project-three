const db = require('../db/config');

const Trip = {};



Trip.update = (Trips, id) => {
  return db.none(
    `
      UPDATE Trips SELECT

    `,


    )
}
