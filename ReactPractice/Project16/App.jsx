/*useContext() hook = 
	                    React Hook that allows you to share values 
                        between multiple levels of components 
                        without passing props through each level 

PROVIDER COMPONENT:
    1. import {createContext} from 'react';
    2. export const MyContext = createContext();
    3. <MyContext.Provider value={value}>
        <Child />
        </MyContext.Provider>
        
CONSUMER COMPONENTS
    1. import React, { useContext } from 'react';
       import { MyContext } from './ComponentA';
    2. const value = useContext(MyContext).jsx;           
*/

import React from 'react';
import ComponentA from './PropsDrilling/ComponentA.jsx';
import ComponentE from './LearnUseContext/ComponentE.jsx';

function App(){

    return(
        <>
        <h1>Prop Drilling</h1>
        <ComponentA />
        <h1>{`Use of useContext() Hook`}</h1>
        <ComponentE />
        </>
    );
}

export default App;
