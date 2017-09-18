import React, {Component} from 'react';

class Flight extends Component{
    constructor(){
        super();
        this.state={
            placeholder:null
        }
    }
    render(){
        return(
            <div className='flight'>
                <h1>hi, i'm a flight</h1>
            </div>
        )
    }
}

export default Flight;