import React, {Component, Fragment} from 'react';
import '../scss/core.scss';

import Header from './Header.js';
import Landing from './Landing.js';
import Results from './Results.js';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'landing',
      url: ''
    }
  }//end constructor

  toggleView = (url) => {
    // any time we set state, react checks and re renders
    this.setState({view: 'results', url: url});
  
  }

  render() {
          if (this.state.view === 'landing') {
            return (
              <Fragment>
                <Header />
                {/* sending a new props object, with a reference to our function */}
                <Landing toggleView={this.toggleView}/>
              </Fragment>
            );
          }
          else if (this.state.view === 'results'){
            return (
              <Fragment>
                <Header />
                <Results url={this.state.url} />
              </Fragment>
            );
          }
        
  }//end render

}//end class

export default App;
