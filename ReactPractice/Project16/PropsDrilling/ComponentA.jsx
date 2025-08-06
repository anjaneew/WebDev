import React, { useState } from 'react';
import ComponentB from './ComponentB.jsx';

function ComponentA(){

    const [name, setName] = useState("Robin Hood");

    return(
        <div className="box">
            <h1>Component A</h1>
            <p>Hello {name}!!!</p>
            <ComponentB name={name}/>
        </div>
    );

}

export default ComponentA;
