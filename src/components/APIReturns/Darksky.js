import React, {Component, Fragment} from 'react';
import superagent from 'superagent';



class Darksky extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      darksky : ['']
    }
  }//end constructor

  DarkSkyAPI = () => {
    // this is where we get the data through superagent
    const url = `https://city-explorer-backend.herokuapp.com/weather`;
    console.log('this.props.alex',this.props.alex);
    superagent.get(url).query({data: this.props.alex}).then(response => {      
      this.setState({ darksky : response.body})
      console.log('response.body:', response.body);
      console.log('darksky:', this.state.darksky);
    }).catch (console.error);

  }



  render() {
    // map through data here
    return (
      <Fragment>
        <p>Darksky</p>
        <h1>{this.state.darksky[0].time}</h1>
        {this.DarkSkyAPI()}
      </Fragment>
    );
        
  }//end render

}//end class

export default Darksky;


//.query with superagent takes care of knowing the specific URL you need on a route with an API!