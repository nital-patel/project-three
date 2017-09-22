import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class UserProfileData extends Component{

  render(){
    return(
      <div className="flight-list">
          <h1> {this.props.trip.username} </h1>
          <h3> {this.props.trip.airline} </h3>
          <p>{this.props.trip.arrtime} </p>
          <p>{this.props.trip.depa_time} </p>
          <p>{this.props.trip.origin}</p>
          <p>{this.props.trip.destination}</p>
          <Link to={`/trip/${this.props.trip.id}`}>See More Information </Link>
      </div>

    )
  }

}


export default UserProfileData;
