import React, {useState} from 'react';

function UpdateArray(){

    const [fruits, setFruits] = useState(["apple 🍎", "grapes 🍇", "mango 🥭"]);

    const handleAddFood = () => {
        const newFruit =  document.getElementById("fruit-input").value;
        document.getElementById("fruit-input").value = "";
        setFruits(f => [...f, newFruit]);
        //updater function
    };

    const handleRemoveFood = (index) => setFruits(fruits.filter((_,i) => i !== index));
    // unused parameter is _
    
    return(
        <>
        <hr/>
        <div className="flex-container">
            <h1>Update an Array in state</h1>
            <h2>List of Fruits:</h2>
            <ul>
                {fruits.map((fruit, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {fruit}
                    </li>)}
            </ul>

            <p>Amend the list:</p>
            <input type="text" id="fruit-input" placeholder="Enter fruit name"/>
            <button onClick={handleAddFood}>Add</button>
        
        </div>
        <hr/>
        </>
    );

}

export default UpdateArray;