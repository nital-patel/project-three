\c the_wave;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Trips;
DROP TABLE IF EXISTS Flights;
DROP TABLE IF EXISTS Hotels;

CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cityCodes (
  id SERIAL PRIMARY KEY,
  city_name VARCHAR(255) UNIQUE NOT NULL,
  city_id char(19) UNIQUE NOT NULL,
  domestics char(1) NOT NULL
);

CREATE TABLE IF NOT EXISTS Flights (

id SERIAL PRIMARY KEY,
flightno VARCHAR(255) UNIQUE NOT NULL,
arrtime VARCHAR(255) UNIQUE NOT NULL,
origin VARCHAR(255) UNIQUE NOT NULL,
depa_time VARCHAR(255) UNIQUE NOT NULL,
duration VARCHAR(255) UNIQUE NOT NULL,
destination VARCHAR(255) UNIQUE NOT NULL,
airline VARCHAR(255) UNIQUE NOT NULL,
totalfare char(4) NOT NULL,
seatsAvailable char(1) NOT NULL
);

CREATE TABLE IF NOT EXISTS Hotels (

  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  rating INTEGER NOT NULL,
  city VARCHAR(255) UNIQUE NOT NULL
  );

CREATE TABLE IF NOT EXISTS Trips (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  flight_id INTEGER REFERENCES flights(id),
  hotel_id INTEGER REFERENCES hotels(id)
);

