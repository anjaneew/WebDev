
import MyApp from './MyApp.jsx'
//required to use JSX.
import React from 'react'

import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react'


// creates a root container.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <MyApp/>
    </StrictMode>
);



// original main.jsx looked as following: 

//required to use JSX.
// import React from 'react';

// needed to create a root for rendering.
// import ReactDOM from 'react-dom/client';

// const myFirstElement = <h1>Hello React!</h1>

// creates a root container.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

//renders the JSX to the DOM.
// root.render(myFirstElement);

// In this example we create a component called 'Hello'.
// The component is rendered in a container called 'root'.