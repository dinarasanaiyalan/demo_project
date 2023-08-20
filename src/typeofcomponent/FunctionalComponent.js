import React from 'react'

function FunctionalComponent(props){

    const name = "Ramesh";
    const num1 = 10;
    const num2 = 20;
    const result = num1+num2;

    return(
        <div>
            <h1>Functional Component Example</h1>
            <h4>{name}</h4>
            <h4>Addition of 10 and 20 is : {result}</h4>
            <p>Description : {props.description}</p>
            <p>Name : {props.name}</p>
            <p>Salary : {props.salary}</p>
        </div>
    )
}

export default FunctionalComponent;