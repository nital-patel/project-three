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
           "http://developer.goibibo.com/api/search/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&format=json&source=EWR&destination=LAX&dateofdeparture=20171120&seatingclass=E&adults=1&children=0&infants=0&counter=100"
        ).then(
            res=>res.json()
        ).then(jsonRes =>{
            this.setState({
                hotelData:jsonRes.data,
                hotelDataLoaded:true
            })
        })
    }
    renderHotels(){
        if(this.state.flightDataLoaded){
           return <Hotel hotelData={this.state.hotelData}/>
        }else{
            return <p>loading hotels</p>
        }
    }
    render() {
        return (
        <div>
            {this.renderHotels()}
        </div>
    );
  }
}

export default HotelDisplay;

  //`http://developer.goibibo.com/api/voyager/get_hotels_by_cityid/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&city_id=6771549831164675055`