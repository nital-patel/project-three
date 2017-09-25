const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const fetch = require('isomorphic-fetch');
const app = express();
const pgpromise = require('pg-promise');
const cors = require('cors');



require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
app.use(cors())
app.use(methodOverride('_method'));

const PORT = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//cors


// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
//

const tripRouter = require('./routes/trip-routes');
app.use('/trip', tripRouter);

const flightRouter = require('./routes/flights-routes');
app.use('/flight', flightRouter);

const hotelRouter = require('./routes/hotel-routes');
app.use('/hotel', hotelRouter);

const authRoutes = require('./routes/auth-route');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

app.use(express.static('public'));
app.use(fetch);
// if (process.env.NODE_ENV) {
//     const webpackMiddleware = require("webpack-dev-middleware");
//     const webpack = require('webpack');
//     const webPackDevConfig = require('./webpack.dev.config');

//     app.use(webpackMiddleware(webpack(webPackDevConfig), {
//         noInfo: true,
//         watchOptions: {
//             aggregateTimeout: 300,
//             poll: true
//         },
//         publicPath: "/",
//         stats: {
//             colors: true
//         },
//     }));
// }

app.get('/*', function(req, res) {
    console.log('Sending index.html');

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port 3000')
})
