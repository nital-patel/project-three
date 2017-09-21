import React, {Component} from 'react';

class Hotel extends Component{
    existsCheck(){
        if(this.props.hotelDatta){
            return <h1>its here</h1>
        }else{
            return <h1>no data</h1>
        }
    }
    render(){
       return(
        <div>
            {this.existsCheck()}
        </div>
       )
    }
}

export default Hotel;