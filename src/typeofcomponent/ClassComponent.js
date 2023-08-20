import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : "Ramesh",
            address : "Chennai",
            age : 10,
            salary : 25300.90 // 25800.90 
        }
        
        this.changeSalary = this.changeSalary.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    changeSalary(){
        this.setState({
            salary : this.state.salary + 500
        })
    }

    changeName(){
        this.setState({
            name : "Dinesh"
        })
    }
    
    render(){
        debugger
        return (
            <div>
                <h1>Class Component Example</h1>
                <p>{this.state.name}</p>
                <p>{this.state.salary}</p>
                <button onClick={this.changeSalary}>Incentive</button>
                <button onClick={this.changeName}>Change Name</button>
                <br></br>
                <h1>Props Example</h1>
                <p>Description : {this.props.description}</p>
                <p>Channel : {this.props.channel}</p>
                <div>
                    <h3>Name : {this.props.userName}</h3>
                    <h3>Age : {this.props.age}</h3>
                    <h3>marks : {this.props.marks}</h3>
                    <h3>Cube of 2 is : {this.props.cube(2)}</h3>
                </div>
            </div>
        )
    }
}

ClassComponent.propTypes = {
    userName : PropTypes.string.isRequired,
    age : PropTypes.number,
    marks : PropTypes.array,
    cube : PropTypes.func
}

ClassComponent.defaultProps = {
    userName : "Ramesh",
    age : 24,
    marks : [90,89,97,87,89],
    cube : function cube(a) { return a*a*a }
}

export default ClassComponent;