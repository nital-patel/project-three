import React, {Component} from 'react';
import UserProfileData from './UserProfileData';
import { withRouter } from 'react-router';

class UserProfile extends Component{
  constructor(){
    super();
    this.state = {
        tripData: null,
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/trip')
      .then(res => {
        this.setState({
          tripData: res.data.data,
        })
      })
  }

  renderUserflight() {
      return this.state.tripData.map(trip => {
        return(
          <UserProfileData key={trip.id} trip={trip} />
          );
      });
  }

  render(){
    return(
        <div className="userflight-list">
          {this.renderUserflight()}
          <button type='add'>add</button>
        <button type='submit'>delete</button>
        </div>

  )
  }
}

export default UserProfile;
