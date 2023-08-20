import React, { Component } from 'react'
import StdDetails from './StudentContext'

class Contact extends Component {
  static contextType = StdDetails;
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>{this.context.contactNo}</p>
      </div>
    )
  }
}

export default Contact