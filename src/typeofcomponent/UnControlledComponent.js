import React, { Component } from 'react'

class UnControlledComponent extends Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
        this.getDetails = this.getDetails.bind(this);
    }

    getDetails(){
        if(null != this.refs.firstName.value && "" != this.refs.firstName.value){
            alert("First Name : "+this.refs.firstName.value+"\n Last Name : "+
            this.refs.lastName.value+"\n Address : "+this.refs.address.value)
        } else {
            alert("FirstName is Mandatory.")
        }
       
    }

    render() {
        return (
            <div>
                <h1>UnControlledComponent</h1>
                <form>
                    <div>
                        <label>First Name :</label>
                        <input type="text" name="firstName" ref="firstName"/>
                    </div>
                    <div>
                        <label>Last Name :</label>
                        <input type="text" name="lastName" ref="lastName"/>
                    </div>
                    <div>
                        <label>Address :</label>
                        <input type="text" name="address" ref="address"/>
                    </div>
                    <button onClick={this.getDetails} >Submit</button>
                </form>
            </div>
        )
    }
}

export default UnControlledComponent