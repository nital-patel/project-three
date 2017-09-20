import React, {Component} from 'react';
import Hotel from './Hotel';
// import flatten from 'flat';

class HotelDisplay extends Component {
  constructor() {
    super();
    this.state={
        hotelData:null,
        hotelDataLoaded:false
    }
  }
  componentDidMount(){
    fetch(
        `http://developer.goibibo.com/api/voyager/get_hotels_by_cityid/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&city_id=6771549831164675055`
    ).then(
        res=>res.json()
    ).then(jsonRes =>{
        this.setState({
            hotelData:jsonRes.data,
            hotelDataLoaded:true
        })
    })
    }
    renderFlights(){
        if(this.state.flightDataLoaded){
           return <Hotel hotelData={this.state.hotelData}/>
        }else{
            return <p>loading hotels</p>
        }
    }
    render() {
        return (
        <div>
            {this.renderFlights()}
        </div>
    );
  }
}

export default HotelDisplay;