import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import App from './App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

export default () => (
    <Router history={customHistory}>
        <div className='router'>
            <Route exact path='/' component={() => (<div><Link to='/register'>Register</Link><Login /></div>)}/>
            <Route exact path='/profile' component={() => (<div><Link to='/search'>Search</Link><h1>Profile Component will come here</h1></div>)} />
            <Route exact path='/search' component={App} />
            <Route exact path='/register' component={Register} />
        </div>
    </Router>
);