//1.
import React, { useState, useEffect, useRef }  from 'react'; 

//using useRef() 🔖 Hook Example - BOOKMARK HOOK 🔖

function MyComponent2(){

    //2.
    const ref =  useRef(0); 

    useEffect(() => {
        console.log("NEW RENDER.");
    });

    //3.
    const handleClick = () => {
        ref.current++;
        //OR  ref.current = ref.current + 1;
        console.log(ref.current);
    }

    return(
        <>
            <button onClick={handleClick}>
                Click useRef() 🔖
            </button>
        </>
    );

}

export default MyComponent2;


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

