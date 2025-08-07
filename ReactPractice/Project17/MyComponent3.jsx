//1.
import React, { useState, useEffect, useRef }  from 'react'; 

//using useRef() 🔖 Hook Example - BOOKMARK HOOK 🔖

function MyComponent3(){

    //2. variable name has to be descriptive
    const inputRef1 =  useRef(null); 
    const inputRef2 =  useRef(null); 
    const inputRef3 =  useRef(null); 

    useEffect(() => {
        console.log("NEW RENDER.");
    });

    //3.
    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <>
            <button onClick={handleClick1}>
                useRef() with HTML🔖
            </button>
            <input ref={inputRef1}/>
            <br />
            <button onClick={handleClick2}>
                useRef() with HTML🔖
            </button>
            <input ref={inputRef2}/>
            <br />
            <button onClick={handleClick3}>
                useRef() with HTML🔖
            </button>
            <input ref={inputRef3}/>
        </>
    );

}

export default MyComponent3;


/* useState() = Re-renders the component when the state value changes.
 * 
 * useRef() = 🔖 "use Reference" does nto cause re-render when the value changes.
 *             When you want the component to "Remember" some information,
 *             but you don't want that information to trigger new renders.
 *             
 *              1. Accessing/Interacting with DOM elements
 *              2. Handling Focus, Animations, and Transitions
 *              3. Managing Timers and Intervals 
 * 
 * 
 * STEPS: 
 *          1. Import
 * 
 *             import React, { useRef }  from 'react';
 * 
 *          2. create useRef object which has one property = current 
 *             so we set its value inside the brackets
 * 
 *             const ref =  useRef(0);
 * 
 *  
 *          3. within HandleClick we access Ref Object
 * 
 *             const handleClick = () => { 
 *              ref.current = ref.current + 1;
 *             }
 * 
 * IMPORTANT : 
 *          Current property of Ref object can also refer to an 
 *          HTML element. 
 * 
 */

