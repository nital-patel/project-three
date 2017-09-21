import React, { Component } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch';
import HotelDisplay from './components/HotelDisplay'
import Header from './components/Header'

import Login from './components/auth/Login';
import Register from './components/auth/Register'

class App extends Component {
  render() {
    return (
      <div className="background">  
        <div className="App">
          <Header />
          <FlightSearch />
          <Login />
          <Register />
          <HotelDisplay />
        </div>
      </div>
    );
  }
}

export default App;
