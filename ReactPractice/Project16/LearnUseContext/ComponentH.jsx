import React, { useContext } from 'react';
import { NameContext } from './ComponentE.jsx';

function ComponentH(){

    const name = useContext(NameContext);

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>Nice to meet you {name}</h2> 
            <p>{`Bye ${name}`}</p>
        </div>
    );

}

export default ComponentH;

/**
 * CONSUMER COMPONENTS
    1. import React, { useContext } from 'react';
       import { MyContext } from './ComponentA.jsx';
    2. const value = useContext(MyContext); 
 */
