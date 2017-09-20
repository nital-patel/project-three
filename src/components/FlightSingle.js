import React, { Component } from 'react';

import axios from 'axios';

class FlightSingle extends Component {

  constructor()
  {
    super();
    this.state = {
      flightData: null,
      flightDataLoaded:false,
      userRedirect: false,
    }
    this.deleteFlight = this.deleteFlight.bind(this);
  }

  componentDidMount(){
    axios.get(`/flight/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          flightDataLoaded: true,
          flightData: res.data.data,
        })
      }).catch(err => console.log(err));
  }

  deleteFlight(){
    axios.delete(`/flight/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState({
          userRedirect: true,
        });
      }).catch(err => {
        console.log(err);
      });
  }

  renderFlightOrLoading(){
    if(this.state.flightDataLoaded){
      return (
        <div className="flightsingle">
          <div className="airline">
            <h3>{this.state.flightData.onwardflights[0].airline}</h3>
            <p> Flight {this.state.flightData.onwardflights[0].flightcode}</p>
          </div>
          <div className='depArr'>
            <p> Departing From {this.props.flightData.onwardflights[0].origin}</p>
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
          </div>
          </div>

        </div>


        )
    }
  }



}

export default FlightSingle;
