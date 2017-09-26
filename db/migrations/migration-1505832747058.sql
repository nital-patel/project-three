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
  city_name TEXT ,
  city_id char(19) ,
  domestics char(1) 
);

CREATE TABLE IF NOT EXISTS Flights (

id SERIAL PRIMARY KEY UNIQUE,
flightno INTEGER ,
arrtime VARCHAR(255) ,
origin VARCHAR(255) ,
depa_time VARCHAR(255) ,
duration VARCHAR(255) ,
destination VARCHAR(255) ,
airline VARCHAR(255) 
);

CREATE TABLE IF NOT EXISTS Hotels (

  id SERIAL PRIMARY KEY UNIQUE,
  name VARCHAR(255) ,
  rating DECIMAL(2,1) ,
  city VARCHAR(255) ,
  city_id INTEGER 
  );

CREATE TABLE IF NOT EXISTS Trips (
  id SERIAL PRIMARY KEY,
  trip_name VARCHAR(255),
  user_id VARCHAR(25),
  flight_id INTEGER,
  hotel_id INTEGER
);

