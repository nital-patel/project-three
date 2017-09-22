import React, { Component } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch';
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
        </div>
      </div>
    );
  }
}

export default App;
