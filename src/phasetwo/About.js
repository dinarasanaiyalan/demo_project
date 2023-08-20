import React, { Component } from 'react'
import StdDetails from './StudentContext';

class About extends Component {
  static contextType = StdDetails;
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>{this.context.address}</p>
      </div>
    )
  }
}

export default About