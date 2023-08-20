import React, { Component } from 'react'

class ContolledComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            address: "",
            contactNo: "",
        }

        this.updateName = this.updateName.bind(this);
        this.updateContactNo = this.updateContactNo.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    updateName(event){
        debugger
        this.setState({
            name: event.target.value 
        })
    }

    updateContactNo(event){
        var contactNo = new String();
        contactNo = event.target.value;
        if(contactNo.length <=10 && contactNo.length != 0){
            this.setState({
                contactNo: event.target.value 
            })
        } else {
            alert("Contact No cannot be greater than 10 Digit.")
        }
        
    }

    updateAddress(event){
        this.setState({
            address: event.target.value 
        })
    }

    formSubmit(){
        if(this.state.contactNo.length != 10){
            alert("Contact No cannot be greater than 10 Digit.")
        }
    }

    render() {
        return (
            <div>
                <h1>ContolledComponent</h1>
                <p>{this.state.name}</p>
                <p>{this.state.address}</p>
                <p>{this.state.contactNo}</p>
                <form>
                    <div>
                        <label>Name : </label>
                        <input type='text' name="name" onChange={this.updateName} />
                    </div>
                    <div>
                        <label>Address : </label>
                        <input type='text' name="contactNo" onChange={this.updateAddress} />
                    </div>
                    <div>
                        <label>Contact Number : </label>
                        <input type='text' name="contactNo" onChange={this.updateContactNo} />
                    </div>
                    <button onClick={this.formSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default ContolledComponent