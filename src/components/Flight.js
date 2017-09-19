import React, {Component} from 'react';

class Flight extends Component{
    constructor(){
        super();
        this.state={
            placeholder:null
        }
    }
    fareConvert(){
        return  this.props.flightData.onwardflights[0].fare.totalfare * 0.016
    }
    render(){
        return(
            <div className='flight'>
                <div className=''>
                    <h3>{this.props.flightData.onwardflights[0].airline}</h3>
                    <p> Flight {this.props.flightData.onwardflights[0].flightcode}</p>
                </div>
                <div className='depArr'>
                    <p> Departing From {this.props.flightData.onwardflights[0].origin}
                    </p>
                    <p> Arriving At {this.props.flightData.onwardflights[0].destination}</p>
                </div>
                <div className='time'>
                    <p>Leaving At {this.props.flightData.onwardflights[0].deptime}</p>
                    <p> Arriving At {this.props.flightData.onwardflights[0].arrtime}</p>
                    <p> Duration {this.props.flightData.onwardflights[0].duration}</p>
                </div>
                <div className='fareSeat'>
                <p> Total Fare {this.fareConvert()}</p>
                <p>Seats Available</p>
                </div>
                {/* Amisha, we need an action here for the route */}
                <form method='POST' action='/trip'>
                    <input type='hidden' name='airline' value={this.props.flightData.onwardflights[0].airline} />
                    <input type='hidden' name='flightno' value={this.props.flightData.onwardflights[0].flightcode} />
                    <input type='hidden' name='origin' value={this.props.flightData.onwardflights[0].origin}/>
                    <input type='hidden' name='destination' value={this.props.flightData.onwardflights[0].destination} />
                    <input type='hidden' name='depa_time' value={this.props.flightData.onwardflights[0].deptime} />
                    <input type='hidden' name='arrtime' value={this.props.flightData.onwardflights[0].arrtime} />
                    <input type='hidden' name='duration' value={this.props.flightData.onwardflights[0].duration} />
                    <input type='hidden' name='totalfare' value={this.fareConvert()} />
                <button type='submit'>Add Flight</button>
                </form>
            </div>
        )
    }
}

export default Flight;
