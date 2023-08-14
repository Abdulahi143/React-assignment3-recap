const CounterReducer = (state, action) => {


    switch (action.type) {
        case "increment":
            return {counter: state.counter + 1};
        case "decrement":
            return {counter: state.counter - 1};

        default:
             throw new Error("Please provide a valid increment or decrement");
    }
}

export default CounterReducer;