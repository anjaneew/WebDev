import React, { useState, useEffect } from 'react'

/* NOTES: useEffect Hook

React Hook that tells React DO SOME CODE WHEN(following:)
    * This component re-renders
    * This component mounts
    * The state of value

useEffact(function, [dependedncies]): 

    1. useEffect(() => {}) //Runs after every re-render
    2. useEffect(() => {}, []) //Runs only on mount
    3. useEffect(() => {}, [value])//Runs on mount + when value changes

USES: 
    1. Event Listeners
    2. DOM manipulation
    3. Subscriptions (real-time updates)
    4. Fetching Date from an API
    5. Clean up when a component unmounts
 */

function MyComponent(){

    const colorNum1 = Math.floor(Math.random() * 256);
    const colorNum2 = Math.floor(Math.random() * 256);
    const colorNum3 = Math.floor(Math.random() * 256);
    // console.log(colorNum1, colorNum2, colorNum3);

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    //useEffect(() => {}) //Runs after every re-render
    useEffect(() => {
        document.title = `Count ${count}`;
        document.getElementById("my-div").style.backgroundColor = `rgb(${colorNum1}, ${colorNum2}, ${colorNum3})`;
    });

    const handleCountAdd = () => setCount((c) => c + 1);
    const handleCountReduce = () => setCount((c) => c -1 );
    const changeColor = () => setColor(c => c === "green" ? "red" : "green");

    return(
        <>
        <div id="my-div">
        <code>useEffect(() => {}) //Runs after every re-render</code>  
        <h1 style={{color: color}}>Count: {count} Color: {color}</h1>
        <button onClick={handleCountAdd}>Add</button>
        <button onClick={handleCountReduce}>Reduce</button>
        <button onClick={changeColor}>Change Color</button>
        </div>
        </>
    );

}

export default MyComponent;