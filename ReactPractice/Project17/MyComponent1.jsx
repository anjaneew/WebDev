import React, { useState, useEffect, useRef }  from 'react';

//using useState() Hook Example

function MyComponent1(){

    let [number, setNumber] =  useState(0);

    useEffect(() => {
        console.log("NEW RENDER.");
    });

    const handleClick = () => {
        setNumber(n => n + 1);
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>
                Click useState() 🧈
            </button>
        </>
    );

}

export default MyComponent1;


/* useState() = Re-renders the component when the state value changes.
 * 
 * useRef() = "use Reference" does nto cause re-render when the value changes.
 *             When you want the component to "Remember" some information,
 *             but you don't want that information to trigger new renders.
 *             
 *              1. Accessing/Interacting with DOM elements
 *              2. Handling Focus, Animations, and Transitions
 *              3. Managing Timers and Intervals 
 * 
 */

