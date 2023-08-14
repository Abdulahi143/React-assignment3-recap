import { useState } from "react"

export const Counter = () => {

    //use state have objects that has two arrays 0 and 1
    // 0 holds the value of the state like start with dark or light, 1 or 0 at the beginning
    // 1 hold the function to update the state

    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>{counter}</p>
            <button className="bg-red-400 color-black px-2 py-2" 
            onClick={() => setCounter(counter + 1)}>Count</button>
        </div>
    )

  
}

