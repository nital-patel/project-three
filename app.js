const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();


const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const PORT = process.env.PORT || 3000;
app.use(logger('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const tripRouter = require('./routes/trip-routes');
app.use('/trip', tripRouter)

const flightRouter = require('./routes/flight-routes');
app.use('/flight', flightRouter)

const hotelRouter = require('./routes/hotel-routes');
app.use('/hotel', hotelRouter)

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
