import React from 'react';
import App from './App';
import FlightSearch from './components/FlightSearch';

import { BrowserRouter, Route } from 'react-router-dom';

export default (
    <BrowserRouter>
        <div className='router'>
            <Router exact=path='/' component={App} />
            <Router exact=path='/Login' component={Login} />
            <Router exact=path='/Register' component={Register} />

           </div>
</BrowserRouter>

)