import React from 'react'
import { connect } from 'react-redux'

const ReduxExample = ({ count, name, increment, decrement, updateName }) => {
    return (
        <div>
            <h1>Redux Example : </h1>
            <p>{count}</p>
            <p>{name}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={updateName}>Update Name</button>
        </div>
    )
}
const mapState = (state) => ({
    count: state.count,
    name: state.name
})

const dispatchingTheRequest = (dispatch) => ({
    increment: () => { 
        debugger; 
        dispatch({ type: 'INCREMENT' }) 
    },
    decrement: () => { 
        debugger;
        dispatch({ type: 'DECREMENT' }) 
    },
    updateName: () => {
        debugger;
        dispatch({ type : "UPDATE_NAME", value : "Dinagaran"})
    }
})

export default connect(mapState, dispatchingTheRequest)(ReduxExample);
