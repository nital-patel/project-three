
import React, { Component } from 'react'
import Login from './auth/Login'
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            boxHovered: false
        }
    }

    render() {
        return(
            <div className='navBar'>
                <Link to='/register' className="link">Register</Link><register />
                    <Link to='/login' className="link">Login</Link><login />
                <span>
                    <p><img className="icon" src="https://downloads.2kgames.com/battleborn/img/battleborn/alani/ability_1.png"/>  <span className="title">The Wave: What's the wave?</span></p>
                    
                    {/* <Login user={this.props.user}/> */}
                </span>

            </div>

        )
    }
}

export default Header
