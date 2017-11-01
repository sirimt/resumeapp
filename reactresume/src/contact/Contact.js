import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      console.log(this.props)
      return (
        <div className="Contact">
          {this.props.superContact}
        </div>
      )
    }
  }

    export default Contact;