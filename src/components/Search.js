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
    this.props.handleSubmit(this.state.searchLocation);
  }

  updateLocation = e => {
    this.setState({searchLocation: e.target.value})
  }

  render() {
    return (
      <Fragment>
        <div class="bar">
        <p>Search for a location</p> 
        <input onChange={this.updateLocation}></input>
        <button onClick={this.handleSearch} >Explore!</button>
        </div>
      </Fragment>
    );
        
  }//end render

}//end class

export default Search;
