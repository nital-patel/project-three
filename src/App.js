import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlightSearch from './components/FlightSearch';

import Login from './components/auth/Login';
import Register from './components/auth/Register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightSearch />
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
