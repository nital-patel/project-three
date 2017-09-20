import React, { Component } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch';
import HotelDisplay from './components/HotelDisplay'

import Login from './components/auth/Login';
import Register from './components/auth/Register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightSearch />
        <Login />
        <Register />
        <HotelDisplay />
      </div>
    );
  }
}

export default App;
