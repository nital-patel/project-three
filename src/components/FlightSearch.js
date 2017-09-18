import React, { Component } from 'react';

class FlightSearch extends Component{
    constructor(){
        super();
        this.state={
            hotelSearchDisplay:false
        }
    }
    render(){
        return(
            <div className='FlightSearch'>
                <form>
                    <input className='departureAirport' />
                    <input className='arrivalAirport' />
                    <input className='depDate' placeholder='departure date' />
                    <input type='checkbox' /> 
                    <input />
                </form>
            </div>
        )
    }
}




export default FlightSearch