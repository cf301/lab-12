import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

import Search from './Search.js';
import Content from './Content.js';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchLocation: '',
      results: {}
    }
  }//end constructor

  handleSearch = location => {
    this.setState({searchLocation: location});
    // this is where we get the data through superagent
    //this.props.url is the entered heroku link
    const url = `${this.props.url}/location?data=${location}`;

    superagent.get(url).then(response => {      
      this.setState({ searchLocation: location, results : response.body})
    }).catch (console.error)
  }


  render() {
    if (this.state.searchLocation === ''){
      return (
        <Fragment>
        <section>
          <Search handleSubmit={this.handleSearch} /> 
          </section>      
        </Fragment>
      );
    }
    else{
      return (
        <Fragment>
        <section>
          <Search handleSubmit={this.handleSearch} />
          {this.state.results.formatted_query && (
            <Content alex={this.state.results}/>
            
          )}
          </section>
        </Fragment>
      );
    }
        
  }//end render

}//end class

export default Results;
