//Tutorial version - awareness of React best practices (cleanup, derived state).
import React, { useState, useEffect } from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());


    useEffect(() => {
                            //setInterval(callback, miliseconds)
        const intervalId = setInterval(() => {
            setTime(new Date());
            //Single state + derived values.
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    const formatTime = () => {

        //Single state + derived values.
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"; 

        hours = hours % 12 || 12;

        //Proper timer cleanup.
        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`;
    }

    const padZero = (num) => {
        return (num < 10 ? "0" : "" ) + num;

    }

    return(
        <>
        <h1>{formatTime()}</h1>
        </>
    );

}

export default DigitalClock;