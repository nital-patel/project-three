import React, {Component} from 'react';
import Hotel from './Hotel';
// import flatten from 'flat';

class HotelDisplay extends Component{
    constructor(){
        super();
        this.state={
            hoteltData:null,
            hoteltDataLoaded:false
        }
        //bindings
        this.hotelNameFinder = this.hotelNameFinder.bind(this)
        this.hotelParser = this.hotelParser.bind(this)
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
    hotelParser(obj){
        const results = [];
        for (let key in obj){
          results.push(obj[key])
        }
        return results
      }
      
    hotelNameFinder(arr){
        for(let i = 0; i <arr.length; i++){
          return arr[i].hotel_geo_node.name;
        }
    }
    
    renderHotels(){
        if(this.state.hotelDataLoaded){
            
           return <Hotel hotelName={this.hotelNameFinder(this.hotelParser(this.state.hotelData.data))}/>
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

//   UPDATE hotel SET
//   name = $1,
//   rating = $2,
//   city = $3,
//   WHERE id = $4

