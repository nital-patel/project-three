import React from 'react';
import App from './App';
//import FlightSearch from './FlightSearch';
import Login from './Login';
import Register from './Register';
import {BrowserRputer, Route} from 'react-router-dom';

export default(

  <BrowserRouter>
    <div className='router'>
      <Router exact path='/' component={App} />
      <Router exact path='/Login' component={Login}/>
      <Router exact path='/Register' component={Register}/>
    </div>
  </BrowserRouter>

  )
