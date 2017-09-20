import React, { Component } from 'react';

class HotelSearch extends Component {
  constructor() {
    super();
    this.state={
        hotelData:null,
        hotelDataLoaded:false
    }
  }
  render() {
    return (
      <div>
        <span>
                    Where would you like to book a Hotel?
          <input />
        </span>
      </div>
    );
  }
}

export default HotelSearch;
