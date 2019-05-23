import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import { getBeers } from "./services/beers";

class App extends Component {
  
  state = {
    beers: []
  }

  componentWillMount(){
    getBeers()
    .then(beers => {
      this.setState({beers});
      console.log('las birras: ', this.state.beers)
    })
    .catch(err => err)
  }
  
  render() {
    let {beers} = this.state;
    return (
      <div className="App">
        <Router beers={beers}/>
      </div>
    );
  }
}

export default App;
