import React, { Component } from 'react';

class Facts extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      console.log(this.props)
      return (
        <div>
          {this.props.superFacts}
        </div>
      )
    }
  }

    export default Facts;