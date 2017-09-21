import React from 'react';
import App from './App';
//import FlightSearch from './FlightSearch';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Route} from 'react-router-dom';

export default(

  <BrowserRouter>
    <div className='router'>
      <Route exact path='/' component={App} />
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Register' component={Register}/>
    </div>
  </BrowserRouter>

  )
