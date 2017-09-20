import React, { Component } from 'react';

class Flight extends Component {

    constructor() {
        super();
        this.state = {
            placeholder: null,
        };
    }

    render() {
        const flight = this.props.flightData.onwardflights[0];

        return (
            <div className="flight">
                <div className="">
                    <h3>{flight.airline}</h3>
                    <p> Flight {flight.flightcode}</p>
                </div>
                <div className="depArr">
                    <p> Departing From {flight.origin}
                    </p>
                    <p> Arriving At {flight.destination}</p>
                </div>
                <div className="time">
                    <p>Leaving At {flight.deptime}</p>
                    <p> Arriving At {flight.arrtime}</p>
                    <p> Duration {flight.duration}</p>
                </div>
                <div className="fareSeat">
                    <p> Total Fare {flight.fare.totalfare}</p>
                    <p>Seats Available</p>
                </div>
                {/* Amisha, we need an action here for the route */}
                <form method='POST' action=''>
                    <input type='hidden' name='airline' value={flight.airline} />
                    <input type='hidden' name='flightno' value={flight.flightcode} />
                    <input type='hidden' name='origin' value={flight.origin}/>
                    <input type='hidden' name='destination' value={flight.destination} />
                    <input type='hidden' name='depa_time' value={flight.deptime} />
                    <input type='hidden' name='arrtime' value={flight.arrtime} />
                    <input type='hidden' name='duration' value={flight.duration} />
                    <input type='hidden' name='totalfare' value={this.fareConvert()} />
                    <input type='hidden' name='seats' value={flight.seatsavailable} />
                    <button type='submit'>Add Flight</button>
                </form>
            </div>
        )
    }
}
export default Flight;
