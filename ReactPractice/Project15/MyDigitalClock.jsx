//my version
import React, { useState, useEffect } from 'react';

function MyDigitalClock(){

    const [today, setDay] = useState(new Date());
    const [hours, setHours] = useState(today.getHours());
    const [minutes, setMinutes] = useState(today.getMinutes());
    const [seconds, setSeconds] = useState(today.getSeconds());

    useEffect(() => {

        setTimeout(()=>{
            setDay(new Date());
            setHours(today.getHours());
            setMinutes(today.getMinutes());
            setSeconds(today.getSeconds());
        }, 1000);

    }, [today]);


    return(
        <>
        <h1>{hours}:{minutes}:{seconds}</h1>
        </>
    );

}

export default MyDigitalClock;