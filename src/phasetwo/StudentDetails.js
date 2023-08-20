import React, { Component } from 'react'
import StdDetails from './StudentContext'

class StudentDetails extends Component {
    static contextType = StdDetails;
    render() {
        return (
            <div>
                <h1>Student Details</h1>
                <p>{this.context.name}</p>
                <p>{this.context.age}</p>
                <p>{this.context.address}</p>
                <p>{this.context.marks}</p>
                <p>{this.context.contactNo}</p>
            </div>
        )
    }
}

export default StudentDetails