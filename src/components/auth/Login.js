import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state={
            blank:null
        }
    }
    render(){
        return(
            <div className='login item section'>
                <h2>Login</h2>
                <form>
                    <input name='username' placeholder='username'></input>
                    <input name='password' placeholder='password'></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;