import React, {Component} from 'react';
import UserProfileData from './UserProfileData';
import axios from 'axios'
import { withRouter } from 'react-router';

class UserProfile extends Component{
  constructor(){
    super();
    this.state = {
        tripData: null,
    }
  }

  componentDidMount(){

    axios.get('/trip')
      .then(res => {
        console.log('got something back: ', res);

        this.setState({
          tripData: res.data.data,
        })
      }).catch(err => console.log('profile error: ', err))
  }

  renderUserflight() {
    if (this.state.tripData)
      return this.state.tripData.map(trip => {
        return (
          <UserProfileData key={trip.id} trip={trip} />
          )
      });
  }

  render(){
    console.log(this.state)
    return(

        <div className="userflight-list">

        <h1>This is the User Profile</h1>
          {this.renderUserflight()}

          <h1>Hi there</h1>
            {/*{this.renderUserflight()}*/}
          <button type='add'>add</button>
        <button type='submit'>delete</button>
        </div>

    )
  }
}

export default UserProfile;
