import React, { useState, createContext } from 'react';
import ComponentF from './ComponentF.jsx'; //1.

export const NameContext = createContext();//2.

function ComponentE(){

    const [name, setName] = useState("Robin of Locksly");

    //3.
    return(
        <div className="box">
            <h1>Component A</h1>
            <p>Hello {name}!!!</p>
            
            <NameContext.Provider value={name}>
                <ComponentF name={name}/>
            </NameContext.Provider>
            
        </div>
    );

}

export default ComponentE;

/* PROVIDER COMPONENT:
    1. import {createContext} from 'react';
    2. export const MyContext = createContext();
    3. <MyContext.Provider value={value}>
        <Child />
        </MyContext.Provider>

*/
