import React, {Component} from 'react';

class HotelSearch extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <span>
                    Where would you like to book a Hotel?
                    <input />
                </span>
            </div>
        )
    }
}

export default HotelSearch;