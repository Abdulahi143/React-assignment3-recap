import { useReducer, useState } from "react"

import CounterReducer from "./Reducers/CounterReducer"

export const Reducer = () =>{

    const initialState = {counter: 0};

    const [state, dispatch] = useReducer(CounterReducer, initialState);


    return (
        <div className="text-center tems-center justify-center min-h-screen">
        <p className="text-xl font-semibold mb-4">Counter: {state.counter}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2" onClick={() => dispatch({type: "increment"})}>Plus</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded ml-2" onClick={() => dispatch({type: "decrement"})}>Minus</button>
      </div>
    )
} 