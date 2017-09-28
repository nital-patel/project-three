import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class UserProfileData extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.trips)
    //debugger;
    return(
      <div className="flight-list">
          <h1> {this.props.trip.city} </h1>
          <h3> {this.props.trip.airline} </h3>
          <p>{this.props.trip.arrtime} </p>
          <p>{this.props.trip.depa_time} </p>
          <p>{this.props.trip.origin}</p>
          <p>{this.props.trip.destination}</p>
          <button type='edit'>Edit</button>
          <button type='submit'>delete</button>
      </div>

    )
  }

}


export default UserProfileData;
