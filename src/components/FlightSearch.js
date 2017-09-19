import React, { Component } from 'react';
import HotelSearch from './HotelSearch'

class FlightSearch extends Component{
    constructor(){
        super();
        this.state={
            hotelSearchDisplay:false
        }
        this.checkHandler=this.checkHandler.bind(this)
    }
    displayHotel(){
        if(this.state.hotelSearchDisplay){
            return <HotelSearch />
        }
        else return
    }
    checkHandler(event){
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;  
        if(this.state.name){
            this.setState({
                [name]:false
            })
        }else{
            this.setState({
                [name]:true
            })
        }
    }
    render(){
        return(
            <div className='FlightSearch item'>
                <form>

                    <div>
                        <h1>Looking for a flight?</h1>
                    </div>
                    
                    <div className='section'>
                        <input className='depAirport' placeholder='departing from'/>
                        <input className='arrAirport' placeholder='arriving at'/>
                    </div>

                    <div className='section'>
                        <input className='depDate' placeholder='departure date' />
                        <span>return flight?
                            <input type='checkbox' />
                        </span>
                        <input className='returnDate' placeholder='return Date'/>
                    </div>

                    <div className='section'>
                        <span>
                            Seats
                            <select className='seatsDrop'>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                            </select>
                        </span>
                        <span>
                            Class
                            <select className='classDrop'>
                                <option value='economy'>Economy</option>
                                <option value='business'>Business</option>
                                <option value='first'>First-Class</option>
                            </select>
                        </span>
                    </div>

                    <div className='section'>
                        <span>Would you like to book a Hotel?
                        <input name='hotelSearchDisplay' value={this.state.hotelSearchDisplay} onChange={this.checkHandler} type='checkbox'/>
                        </span>
                    </div>
                    {this.displayHotel()}
                    <div className='section'>
                        <button>Find my Flight!</button>
                    </div>

                </form>
            </div>
        )
    }
}




export default FlightSearch