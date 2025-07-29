import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => setName("Robin Hood");
    const incrementAge = () => setAge( age + 1);
    const toggleStatus = () => setIsEmployed(!isEmployed);

    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Employed: {isEmployed ? "yes" : "no"}</p>

            <button onClick={updateName}>setName</button>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={toggleStatus}>Toggle Employment status</button>
        </div>
    );
}

export default MyComponent