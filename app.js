const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.use(methodOverride('_method'));

const PORT = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

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

if (process.env.NODE_ENV) {
    const webpackMiddleware = require("webpack-dev-middleware");
    const webpack = require('webpack');
    const webPackDevConfig = require('./webpack.dev.config');

    app.use(webpackMiddleware(webpack(webPackDevConfig), {
        noInfo: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        publicPath: "/",
        stats: {
            colors: true
        },
    }));
}

app.get('/', (req, res) => {
    res.render('main-index');
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});
