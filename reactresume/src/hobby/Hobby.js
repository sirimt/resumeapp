import React, { Component } from 'react';

class Hobby extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      console.log(this.props)
      return (
        <div>
          <li className="App-header">
            {this.props.superHobby}</li>
        </div>
      )
    }
  }

    export default Hobby;