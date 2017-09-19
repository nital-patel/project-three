import React, {Component} from 'react'

class Register extends Component{
    constructor(){
        super();
        this.state={
            blank:null
        }
    }
    render(){
        return(
            <div className='login item section'>
                <h2>Register</h2>
                {/* nital, put in an action that is the route you want to call the auth methods on */}
                <form method='POST' action=''>
                    <input name='username' placeholder='username'></input>
                    <input name='email' placeholder='email'></input>
                    <input name='password' placeholder='password'></input>
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Register;