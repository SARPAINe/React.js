import React, { useState, Fragment, useReducer } from "react";
import Todos from "./components/Todos";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

//returns new updated state
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    // const [count, setCount] = useState(0);
    const increment = () => {
        // setCount((prevState) => {
        //     return prevState + 1;
        // });
        dispatch({ type: ACTIONS.INCREMENT });
    };
    const decrement = () => {
        // setCount((prevState) => {
        //     return prevState - 1;
        // });
        dispatch({ type: ACTIONS.DECREMENT });
    };
    return (
        <Fragment>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
            <br></br>
            <br></br>
            <br></br>
            <Todos></Todos>
        </Fragment>
    );
};

export default App;
