import { createStore } from 'redux'

/**
 * Initial State
 */
const initialState = {
    count : 0, //1, 2
    name : 'Ramesh'
}

/**
 * Reducer
 */

const reducer = ((state = initialState, action) => {
    debugger;
    if(action.type == "INCREMENT"){
        return {...state, count: state.count+1 } // 0+1 = 1 --> 1+1 = 2
    } else if(action.type == "DECREMENT"){
        return {...state, count: state.count-1 } // 0+1 = 1 --> 1+1 = 2
    } else if(action.type == "UPDATE_NAME"){
        return {...state, name: action.value}
    } else {
        return state;
    }
})

const updateStore = createStore(reducer);
export default updateStore;
