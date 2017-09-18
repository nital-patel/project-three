import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlightSearch from './components/FlightSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlightSearch />
      </div>
    );
  }
}

export default App;
