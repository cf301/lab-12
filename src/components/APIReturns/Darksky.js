import React, {Component, Fragment} from 'react';
import superagent from 'superagent';



class Darksky extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      darksky : ['']
    }
  }//end constructor

  render() {
    // map through data here

    return (
      <Fragment>
        <p>Darksky</p>
        <ul>
        <li>
        {this.props.dark.map(x => {
          return x;
        }) }
        </li>
        </ul>
      </Fragment>
    );
        
  }//end render

}//end class

export default Darksky;


//.query with superagent takes care of knowing the specific URL you need on a route with an API!