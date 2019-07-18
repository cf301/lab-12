import React, {Component, Fragment} from 'react';

import Darksky from './APIReturns/Darksky.js';
import Yelp from './APIReturns/Yelp.js';
import Events from './APIReturns/Events.js';
import MovieDB from './APIReturns/MovieDB.js';
import Hiking from './APIReturns/Hiking.js';


require('dotenv').config();


class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      alex: ''
    }
  }//end constructor


  loadImage = () => {
    let lat = this.props.alex.latitude;
    let long = this.props.alex.longitude;
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}%2c%20${long}&zoom=13&size=600x300&maptype=roadmap%20%20&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;
    return url;
  }


  
  // https://via.placeholder.com/400x300
  render() {
    return (
      <Fragment>
        <img src={this.loadImage()} alt='google maps'></img>
        
        <p>Here are the results for {this.props.alex.formatted_query}</p>
        <Darksky alex={this.props.alex}/>
        <Yelp />
        <Events/>
        <MovieDB />
        <Hiking />

      </Fragment>
    );
  
  }//end render

}//end class

export default Content;
