import React, { Component } from 'react';
import './App.css';
import Hobby from "./hobby/Hobby";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hobby1: "Yoga",
        hobby2: "Fishing"
    };
  }
  render() {
    return (
      <div className="App">
        Siri Eliasen
        <Hobby superHobby={this.state.hobby1}/>
        <Hobby superHobby={this.state.hobby2}/>
      </div>
    );
  }
}

export default App;
