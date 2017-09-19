import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlightSearch from './components/FlightSearch';
import FlightDisplay from './components/FlightDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightSearch />
        <FlightDisplay />
      </div>
    );
  }
}

export default App;
