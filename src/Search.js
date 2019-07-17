import React, {Component, Fragment} from 'react';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchLocation: ''
    }
  }//end constructor

  handleSearch = e => {
    e.preventDefault();
    console.log(':', this.state.searchLocation);
    this.props.handleSubmit(this.state.searchLocation);

  }

  updateLocation = e => {
    console.log ('e.target.value:',e.target.value);
    this.setState({searchLocation: e.target.value})
  }


  render() {
    return (
      <Fragment>
        
        <p>Search for a location</p> 
        <input onChange={this.updateLocation}></input>
        <button onClick={this.handleSearch} >Explore!</button>
      </Fragment>
    );
        
  }//end render

}//end class

export default Search;
