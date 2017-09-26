\c the_wave;


DROP TABLE IF EXISTS Trips;
DROP TABLE IF EXISTS Flights;
DROP TABLE IF EXISTS Hotels;
DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY UNIQUE,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_digest TEXT NOT NULL,
  salt TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cityCodes (
  id SERIAL PRIMARY KEY UNIQUE,
  city_name TEXT NOT NULL,
  city_id char(19) NOT NULL,
  domestics char(1) NOT NULL
);

CREATE TABLE IF NOT EXISTS Flights (

id SERIAL PRIMARY KEY UNIQUE,
flightno INTEGER NOT NULL,
arrtime VARCHAR(255) NOT NULL,
origin VARCHAR(255) NOT NULL,
depa_time VARCHAR(255) NOT NULL,
duration VARCHAR(255) NOT NULL,
destination VARCHAR(255) NOT NULL,
airline VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Hotels (

  id SERIAL PRIMARY KEY UNIQUE,
  name VARCHAR(255) NOT NULL,
  rating DECIMAL(2,1) NOT NULL,
  city VARCHAR(255) NOT NULL,
  city_id INTEGER NOT NULL
  );

CREATE TABLE IF NOT EXISTS Trips (
  id SERIAL PRIMARY KEY,
  trip_name VARCHAR(255),
  user_id VARCHAR(25),
  flight_id INTEGER,
  hotel_id INTEGER
);

