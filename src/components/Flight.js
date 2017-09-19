<<<<<<< HEAD
import React, { Component } from 'react';

class Flight extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: null,
    };
  }

  render() {
    return (
      <div className="flight">
        <div className="">
          <h3>{this.props.flightData.onwardflights[0].airline}</h3>
          <p> Flight {this.props.flightData.onwardflights[0].flightcode}</p>
        </div>
        <div className="depArr">
          <p> Departing From {this.props.flightData.onwardflights[0].origin}
          </p>
          <p> Arriving At {this.props.flightData.onwardflights[0].destination}</p>
        </div>
        <div className="time">
          <p>Leaving At {this.props.flightData.onwardflights[0].deptime}</p>
          <p> Arriving At {this.props.flightData.onwardflights[0].arrtime}</p>
          <p> Duration {this.props.flightData.onwardflights[0].duration}</p>
        </div>
        <div className="fareSeat">
          <p> Total Fare {this.props.flightData.onwardflights[0].fare.totalfare}</p>
          <p>Seats Available</p>
        </div>
      </div>
    );
  }
}

export default Flight;
=======
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
                <p> Total Fare {this.props.flightData.onwardflights[0].fare.totalfare}</p>
                <p>Seats Available</p>
                </div>
            </div>
        )
    }
}

export default Flight;
>>>>>>> 99c5685159019e5297b95eddf0864dc5967f54cb
