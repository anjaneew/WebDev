import React, { useState, useEffect } from 'react';

function CleanUp(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const fruits = ['🍇','🍈','🍉','🍊','🍋','🍋‍🟩','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥑']

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added.");

        //clean up before new rendering if there is no dependencies
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed.");
        };
        
    }, []);
    

    useEffect(() => {

        const randomNum = Math.floor(Math.random() * 17);
        console.log(randomNum);
        document.getElementById('fruit-lorry').textContent = fruits[randomNum].repeat(9);

    }, [width, height] );

    return(
        <>
        <div id="random-color">
        <h1>useEffect - Effect Cleanup</h1>
        <pre><code>{ `
        useEffect(() => {
            // Runs on first render
            // And whenever dependencies change (if any)
            // Side effect logic here

            return () => {
                // Cleanup logic here (optional)
            };
            
            }, [dependencies]);` }</code></pre>
        <h3 id="fruit-lorry"></h3>    
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
        </div>
        </>
    );
}

export default CleanUp;