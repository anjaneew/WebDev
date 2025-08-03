import React, {useState} from 'react';

function UpdateObject(){

    const [car, setCar] = useState({year: 2018,
                                    make: "McLaren",
                                    model: "720S",
                                    img: "https://cdn.motor1.com/images/mgl/7ZL30P/s1/all-black-mansory-mclaren-720s.jpg"});
    
    // const handleMakeChange = (e) => setCar({...car, make:e.target.value});
    // const handleYearChange = (e) => setCar({...car, year: e.target.value});
    // const handleModelChange = (e) => setCar({...car, model: e.target.value});
    // const handleImgChange = (e) => setCar({...car, img: e.target.value}); 

    //futureproof with updater function
    const handleMakeChange = (e) => setCar(c => ({...c, make:e.target.value}));
    const handleYearChange = (e) => setCar(c =>({...c, year: e.target.value}));
    const handleModelChange = (e) => setCar(c =>({...c, model: e.target.value}));
    const handleImgChange = (e) => setCar(c =>({...c, img: e.target.value})); 

    return(
        <>
        <hr/> 
        <div className="flex-container">
              
            <h1>Update an Object in state</h1>
            <p>My favourite car is {car.make} {car.year} {car.model}.</p> 
            <img src={car.img} alt="car image" title="car image"/>
            <p>It looks stunning!</p>

            <h3>Update data below:</h3>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
            <input type="text" value={car.img} onChange={handleImgChange}/>
            
        </div>
        <hr/> 
        </>
    );

}

export default UpdateObject;

// notes: 
//  1. hr   doesnt work in flex-colum well 