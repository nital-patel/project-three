import React, {Component} from 'react';

class Hotel extends Component{
    // parseHotelData(){
    //     for(){

    //     }
    // }
    existsCheck(){
        if(this.props.hotelName){
            return <h1>{this.props.hotelName}</h1>
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

// const example = {"data": {
//     "7896057623069017075": {
//         "hotel_geo_node": {
//             "name": "Ayurvedagram",
//             "tags": {
//                 "property_type": [
//                     "Resort"
//                 ],
//                 "hotel_listing_type": [
//                     "goibibo_main"
//                 ],
//                 "others": [
//                     "goibibo_hotel"
//                 ]
//             },
//             "raw_tags": [],
//             "location": {
//                 "lat": 12.989,
//                 "long": 77.782
//             },
//             "_id": "7896057623069017075",
//             "type": 120
//         },
//         "hotel_data_node": {
//             "rating": 4,
//             "img_processed": [],
//             "name": "Ayurvedagram",
//             "extra": {
//                 "check_in": "1200",
//                 "check_out": "1200",
//                 "gir_data": {},
//                 "vendor_priority": 374
//             },
//             "ids": {},
//             "st": "LIV",
//             "facilities": {
//                 "cmapped": {},
//                 "mapped": []
//             },
//             "desc": {
//                 "default": ""
//             }}
//         }
//     }
// }