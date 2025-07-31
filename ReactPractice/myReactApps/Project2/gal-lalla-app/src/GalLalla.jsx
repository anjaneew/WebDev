// READ ME -
//     1. instead dommanipulation use something called state + map rendering in jsx 
//     2. current issues:
//         can't drag to draw (only click works)
//         cant change Color
//            issue is it renders only once
//     3 new features:
//         reset button doesnt work



import React, {useState, useEffect} from 'react'

function GalLalla(){

    //variable
    const [color, setColor] = useState("#FFFFFF");

    //functions
    const handleColorChange = (e) => setColor(e.target.value);

    // const clearCanvas = () => document.getElementById("box-container").querySelectorAll('div').style.backgroundColor = "#FFFFFF";
    
    useEffect(()=> {

            const boxContainer = document.getElementById("box-container");
            boxContainer.innerHTML = "";

            for(let i = 0; i < 2500; i++){

                const box = document.createElement("div");
                box.style.width = "10px";
                box.style.height = "10px";
                box.style.border = "1px solid grey";

                box.addEventListener("click", () => {
                    box.style.backgroundColor = color;
                });

                boxContainer.appendChild(box);
            }
        }, []);


    return(
        <div className="container">

                <h1>~ ගල් ලෑල්ල ~</h1>
                <h2>~ Gal Lalla (Writing Slate) ~</h2>
            
            <div className="input-container">
                <p>Select Color:</p>
                <input value={color} type="color" onChange={handleColorChange}/>
                {/* <button type="button" onClick={clearCanvas}>Reset</button> */}
            </div>
            
            <div className="display-container" id="box-container">

            </div>

        </div>
    );
}

export default GalLalla

