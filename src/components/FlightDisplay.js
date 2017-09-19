import React, {Component} from 'react';
import Flight from './Flight'

class FlightDisplay extends Component{
    constructor(){
        super();
        this.state={
            flightData:null,
            flightDataLoaded:false
        }
        //bindings
    }
    componentDidMount(){
        fetch(
            'http://developer.goibibo.com/api/search/?app_id=d09ac5c5&app_key=727ff3f0af2bda5a3443c6977cdea544&format=json&source=EWR&destination=LAX&dateofdeparture=20171220&seatingclass=E&adults=1&children=0&infants=0&counter=100'
        ).then(
            res=>res.json()
        ).then(jsonRes =>{
            this.setState({
                flightData:jsonRes.data,
                flightDataLoaded:true
            })
        })
    }
    renderFlights(){
        if(this.state.flightDataLoaded){
           return <Flight flightData={this.state.flightData}/>
        }else{
            return <p>loadingflights</p>
        }
    }
    render(){
        return(
            <div>
                {this.renderFlights()}
            </div>
        )
    }
}

export default FlightDisplay;