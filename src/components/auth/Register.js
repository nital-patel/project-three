import React, {Component} from 'react'

class Register extends Component{
    constructor(){
        super();
        this.state={
          username: '',
          email: ''
          password: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e){
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value,
    });

    handleFormSubmit(e) {
        e.preventDefault();
        axios.post('/user', {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }).then(res => {
          console.log(res);
          this.setState({
            newId: res.data.data.id
          });
        }).catch(err => console.log(err));
        e.target.reset();
      }


    render(){
        return(
            <div className='login item section'>
                <h2>Register</h2>
                {/* nital, put in an action that is the route you want to call the auth methods on */}
                <form onSubmit={this.handleFormSubmit}>
                    <input name='username' placeholder='username' value={this.state.username} onChange={this.handleInputChange}></input>
                    <input name='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange}></input>
                    <input name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange}></input>
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default Register;
