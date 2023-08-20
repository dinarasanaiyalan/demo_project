// rce ---> to create class component
import React, { Component } from 'react'

class ComponentLifeCycleInClass extends Component {

    // rconst --> to create constructor with default state
    constructor(props) {
        super(props)

        this.state = {
            beforeMounting: 0,
            afterMounting: 0,
            count: 0,
            loggedPerson: "ROLE_STUDENT",
            beforeUpdate: 0,
            afteUpdate: 0
        }

        this.changeState = this.changeState.bind(this);
        this.changeRole = this.changeRole.bind(this);
    }

    componentWillMount() {
        debugger
        this.setState({
            beforeMounting: this.state.beforeMounting + 1
        })
    }

    componentDidMount() {
        debugger
        this.setState({
            afterMounting: this.state.afterMounting + 1
        })
    }

    changeState() {
        if (this.state.loggedPerson == "ROLE_STAFF") {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    changeRole() {
        this.setState({
            loggedPerson: "ROLE_STAFF"
        })
    }

    shouldComponentUpdate() {
        if (this.state.loggedPerson == "ROLE_STUDENT") {
            return false;
        } else if (this.state.loggedPerson == "ROLE_STAFF") {
            return true;
        }
    }

    componentWillUpdate() {
        alert("Component Update Started..")
    }

    componentDidUpdate() {
        alert("Component Update Completed...")
    }

    componentWillUnmount() {
        alert("Component Destroyed...")
        this.setState({
            beforeMounting: null,
            afterMounting: null,
            count: null,
            loggedPerson: null
        })
    }

    render() {
        debugger
        return (
            <div>
                <h1>ComponentLifeCycleInClass</h1>
                <h4>Before Mounting : {this.state.beforeMounting}</h4>
                <h4>After Mounting : {this.state.afterMounting}</h4>
                <h4>Updated Count : {this.state.count}</h4>
                <button onClick={this.changeState}>Increase</button>
                <button onClick={this.changeRole}>Change to Staff</button>
            </div>
        )
    }
}

export default ComponentLifeCycleInClass