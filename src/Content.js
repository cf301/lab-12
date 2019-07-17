import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      map: '',
      darkSky: '',
      yelp: '',
      event: '',
      MovieDB: '',
      Hiking: ''
    }
  }//end constructor


  // loadImage = () => {
  //   let lat = this.props.alex.latitude;
  //   let long = this.props.alex.longitude;
  //   let url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}%2c%20${long}&zoom=13&size=600x300&maptype=roadmap%20%20&key=AIzaSyDcL2acmeAJcxDX9sAs-BneUbT9iHVV7gA`;
  //   return url;
  // }

  
  //let grant = this.props.alex;

  render() {
    return (
      <Fragment>
        <img src='https://via.placeholder.com/400x300'></img>
        
        <p>Here are the results for {this.props.alex.formatted_query}</p>
        <section>Darksky</section>
        <section>yelp</section>
        <section>event</section>
        <section>MovieDB</section>
        <section>Hiking</section>
      </Fragment>
    );
  
  }//end render

}//end class

export default Content;
