//updater function - passed as an argument for setState()
//                 -allow safe updates based on previous state
//                 - used in asyncronous functions & good practice
//
//                  ex: setYear(year + 1); > setYear(updater function - arrow function)
//                                           setYear( prevYear => year + 1);
//                                           setYear( y => y +  1 );


import styles from './Counter.module.css'
import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    const handleCountIncrease = () => {
        // setCount(count + 1);
        // setCount(count + 1);

        // setCount(prevCount => prevCount + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const handleCountReset = () => {
        setCount(0);
    }

    const handleCountDecrease = () => {
        // setCount(count - 1);

        setCount(c => c - 1);
        setCount(c => c - 1);
    }





    return(
        <div className={styles.container}>
        <h1>~Counter App~</h1>
        <h1>{count}</h1>
        <div>
        <button onClick={handleCountDecrease}>Decrease(2)</button>
        <button onClick={handleCountReset}>Reset</button>
        <button onClick={handleCountIncrease}>Increase(2)</button>
        </div>

        </div>
    );

}

export default Counter