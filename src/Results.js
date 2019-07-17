import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

import Search from './Search.js';
import Content from './Content.js';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchLocation: '',
      results: []
    }
  }//end constructor

  handleSearch = location => {
    this.setState({searchLocation: location});
    console.log('in results, location is: ', location);
    // this is where we get the data through superagent

    const url = `https://city-explorer-backend.herokuapp.com/location?data=${location}`;

    superagent.get(url).then(response => {      
      this.setState({ searchLocation: location, results : response.body})
    })
  }


  render() {
    if (this.state.searchLocation === ''){
      return (
        <Fragment>
          <Search handleSubmit={this.handleSearch} />       
        </Fragment>
      );
    }
    else{
      return (
        <Fragment>
          <Search handleSubmit={this.handleSearch} />
          <Content alex={this.state.results}/>
        </Fragment>
      );
    }
        
  }//end render

}//end class

export default Results;
