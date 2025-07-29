import React, {useState} from 'react'


function Counter(){

    const [count, setCount] = useState(0);

    const decrementCount = () => setCount(count -1);
    const resetCount = () => setCount(0);
    const incrementCount = () => setCount(count + 1);

    return(
        <>
        <h1>Counter App using useState() Hook</h1><br></br>
        <h2>{count}</h2>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>Increment</button>
        </>
    );
}

export default Counter