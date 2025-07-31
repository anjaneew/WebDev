import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => setColor(e.target.value);

    return(
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div> 
                <p>Selected Color: {color}</p>
                <div className="color-display" style={{backgroundColor: color}}></div>
            </div>
            <label>Select a color:</label>
            <input type="color" onChange={handleColorChange} value={color}></input>

        </div>
        </>
    );

}

export default ColorPicker