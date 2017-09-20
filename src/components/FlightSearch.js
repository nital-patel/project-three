import React, { Component } from 'react';
import HotelSearch from './HotelSearch';
import FlightDisplay from './FlightDisplay';

class FlightSearch extends Component{
    constructor(){
        super();
        this.state={
            hotelSearchDisplay:false,
            depAirport:null,
            arrAirport:null,
            depDate:null,
            returnDate:null,
            class:'economy',
            searchFull:false
        }
        this.checkHandler=this.checkHandler.bind(this);
        this.displayHotel=this.displayHotel.bind(this);
        this.searchFullCheck=this.searchFullCheck.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
        this.renderFlightDisplay=this.renderFlightDisplay.bind(this);
    }
    displayHotel(){
        if(this.state.hotelSearchDisplay){
            return <HotelSearch />
        }
        else return
    }
    
    searchFullCheck(){
        if(this.state.depAirport && this.state.arrAirport && this.state.depDate && this.state.returnDate){
            this.setState({
                searchFull:true
            })
        }
    }
    changeHandler(event){
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;  
        this.setState({
            [name]:value
        })    
    }
    renderFlightDisplay(){
        if(this.state.searchFull){
            return(
                <div>
                    <FlightDisplay name='depart' depAirport={this.state.depAirport} arrAirport={this.state.arrAirport} date={this.state.depDate}/>
                    <FlightDisplay name='return' depAirport={this.state.depAirport} arrAirport={this.state.arrAirport} date={this.state.returnDate}/>
                </div>
            )
        }
    }
    submitHandler(event){
        event.preventDefault();
        this.searchFullCheck();
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
            <div>
                <div className='tools'>
                    {this.state.depAirport}/
                    {this.state.arrAirport}/
                    {this.state.depDate}/
                    {this.state.returnDate}/
                    {this.state.searchFull}
                </div>
                <div className='FlightSearch item'>
                    <form>

                        <div>
                            <h1>Looking for a flight?</h1>
                        </div>
                        
                        <div className='section'>
                            <input name='depAirport' className='depAirport' placeholder='departing from' onChange={this.changeHandler}/>
                            <input name='arrAirport' className='arrAirport' placeholder='arriving at' onChange={this.changeHandler}/>
                        </div>

                        <div className='section'>
                            <input name='depDate' className='depDate' placeholder='departure date' onChange={this.changeHandler}/>
                            <span>return flight?
                                <input type='checkbox' />
                            </span>
                            <input name='returnDate'className='returnDate' placeholder='return Date' onChange={this.changeHandler}/>
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
                                <select name='class' className='classDrop'>
                                    <option value='economy'>Economy</option>
                                    <option value='business'>Business</option>
                                
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
                            <button onClick={this.submitHandler}>Find my Flight!</button>
                        </div>

                    </form>
                </div>
               {this.renderFlightDisplay()}
            </div>
        )
    }
}




export default FlightSearch;