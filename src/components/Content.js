import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

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
      flag: true,
      backEndUrl: '',
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    }
  }//end constructor


  loadImage = () => {
    let lat = this.props.alex.latitude;
    let long = this.props.alex.longitude;
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}%2c%20${long}&zoom=13&size=600x300&maptype=roadmap%20%20&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;
    return url;
  }


  getAllData = async () => {
    try{ 
      console.log('this.props.alex in getAllData:',this.props.alex);

      const weathersResults = await superagent.get(this.state.backEndUrl + '/weather').query({ data: this.props.alex });
      const moviesResults = await superagent.get(this.state.backEndUrl + '/movies').query({ data: this.props.alex });
      const trailsResults = await superagent.get(this.state.backEndUrl + '/trails').query({ data: this.props.alex });
      const yelpResults = await superagent.get(this.state.backEndUrl + '/yelp').query({ data: this.props.alex });

      this.setState({apiResults: {
        weathers: weathersResults.body,
        movies: moviesResults.body,
        hiking: trailsResults.body,
        yelp: yelpResults.body,
        flag : false
      } })
      console.log(this.state.apiResults);
    }
    catch{
      console.log('catch this.');
      console.log('this.state.apiResults.weathers.length',this.state.apiResults.weathers);
      console.log('this.props.alex.formatted_query',this.props.alex.formatted_query);
    }
    
  }

  
  // https://via.placeholder.com/400x300
  render() {
    {this.props.alex.formatted_query && this.state.flag === true && this.getAllData()}
    return (
      <Fragment>
        <img src={this.loadImage()} alt='google maps'></img>
        
        <p>Here are the results for {this.props.alex.formatted_query}</p>

        
        {this.state.apiResults.weathers && this.props.alex.formatted_query && (
        <Fragment>
          {/* <Darksky dark={this.state.apiResults.weathers}/> */}
          <p>{this.state.apiResults.weathers}</p>
          <Yelp  />
          <Events/>
          <MovieDB />
          <Hiking />
        </Fragment>
        )}
        

      </Fragment>
    );
  
  }//end render

}//end class

export default Content;
