import React, {Component} from 'react';
import Hotel from './Hotel';
// import flatten from 'flat';
//import axios from 'axios';
import hotelData from './hotelData'

class HotelDisplay extends Component{
    constructor(){
        super();
        this.state={
            hotelData:null,
            hotelDataLoaded:false
        }
        //bindings
        this.hotelNameFinder = this.hotelNameFinder.bind(this)
        this.hotelParser = this.hotelParser.bind(this)
        this.hotelFaker = this.hotelFaker.bind(this);
    }
    hotelFaker(){
        this.setState({
            hotelData:hotelData
        });
    }
    // axios <=====
    // componentDidMount(){
    //     let selection = this.props.hotelSelection
    //     axios.get( `/hotel/${this.props.hotelSelection}`)
    //     .then(res => {
    //       console.log('got something back: ', res)
    //       this.setState({
    //         tripData: res.data.data,
    //       })
    //     })
    // }
    // fetch <======
    // componentDidMount(){
    //     let selection = this.props.hotelSelection
    //     fetch(
    //         `/hotel/${this.props.hotelSelection}`
    //         // 'https://localhost:3000/hotel/1'
    //     ).then(
    //     res=>res.json()
    //     ).then(jsonRes =>{
    //         console.log(jsonRes)
    //         this.setState({
    //             hotelData:jsonRes.data,
    //             hotelDataLoaded:true
    //         })
    //     })
    //     console.log(this.props.hotelSelection,'<-----hotel selection')
    // }
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
            const hotelData = this.state.hotelData
           return (
            <div>
                <Hotel hotelData={hotelData[0]}/>
                <Hotel hotelData={hotelData[1]}/>
                <Hotel hotelData={hotelData[2]}/>
            </div>
            )
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
//return <Hotel hotelName={this.hotelNameFinder(this.hotelParser(this.state.hotelData.data))}/>
