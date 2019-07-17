import React, {Component, Fragment} from 'react';
//import superagent from 'superagent';

import Form from './Form.js'



class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }//end constructor

  // handleURLBackReal = e => {
  //   e.preventDefault();
  //   superagent.get('https://swapi.co/api/people/').then(response => {
  //     console.log(response.body.results);
  //     this.setState({results : response.body.results})
  //   })
  // }
  
  handleURLBack = e => {
    e.preventDefault();
    console.log('new state of input:', this.state.input);
    //can send back things like, e.target or a number that can be used.
    this.props.toggleView(this.state.input);
  }

  updateInput = e => {
    console.log ('e.target.value:',e.target.value);
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <Fragment>
        <p>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</p>
        <input onChange={this.updateInput}></input>
        <button onClick={this.handleURLBack} >Button</button>
        
      </Fragment>
    );
        
  }//end render

}//end class

export default Landing;
