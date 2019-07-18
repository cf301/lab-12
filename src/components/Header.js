import React, {Component, Fragment} from 'react';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }//end constructor

  render() {
    return (
      <Fragment>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies, and more!</p>
      </Fragment>
    );
        
  }//end render

}//end class

export default Header;
