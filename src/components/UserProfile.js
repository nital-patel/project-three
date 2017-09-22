import React, {Component} from 'react';
import UserProfile from './UserProfile';
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
        </div>
      )
  }
}

export default UserProfile;