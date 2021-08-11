import React, { useReducer } from 'react';


const initialState = {count: 0}
 function reducer (state, action) {
    switch (action.type){
        case "increment" : 
        return {count: state.count + 1}
        default :
        return  state
    }
}

const ReducerCount = () => {

const [state, dispatch] = useReducer(reducer, initialState)

    return ( 
        <div>
            <h3>this is useReducer</h3>
            <h2>total count: {state.count}</h2>
            <button onClick = {() => dispatch({type: "increment"})}>INCREMENT</button>
            <button>DECREMENT</button>
        </div>
    );
};

export default ReducerCount;