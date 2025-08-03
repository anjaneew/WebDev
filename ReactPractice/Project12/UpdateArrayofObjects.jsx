// My version

import React, {useState} from 'react';



function UpdateArrayofObjects(){

    const [books, setBook] = useState([
        {name: "The Alchemist", year: 1988, author: "Paulo Coelho", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhoxh8d3eCQnDAtDAnFQZ44xCJZGHCONS5A&s"},
        {name: "To Kill a Mockingbird", year: 1960, author: "Harper Lee", img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1612238791i/56916837.jpg"},
        {name: "One Hundred Years of Solitude", year: 1967, author: "Gabriel García Márquez", img: "https://images.thegreatestbooks.org/zczsb1tdkvo582f59slp0oam4vg5"},
        {name: "Moby-Dick", year: 1951, author: "Herman Melville", img: "https://images.thegreatestbooks.org/qcjc5ow73ifto3m3h4zx2yef9ty4"},
        {name: "War and Peace", year: 1869, author: "Leo Tolstoy", img: "https://images.thegreatestbooks.org/24wtdlcfgr3neehj6ev3k4de5ley"},
        {name: "Crime and Punishment", year: 1866, author: "Fyodor Dostoevsky", img:"https://images.thegreatestbooks.org/7c2iucbwfk8op4at81czhlfklajc" },
        {name: "Pride and Prejudice", year: 1813, author: "Jane Austen", img: "https://images.thegreatestbooks.org/6o2iawyerjzuwiwhe0j39o1sw90m"}
    ]);

    const [bookTitle, setTitle] = useState("");
    const [bookYear, setYear] = useState("");
    const [bookAuthor, setAuthor] = useState("");
    const [bookImg, setImg] = useState("");

    //DONT USE DOM - Cz in react they want to use states

    // const handleBookChange = () => {
    //     const newTitle = document.getElementById("book-name").value; 
    //     const newYear = document.getElementById("book-year").value;
    //     const newAuthor = document.getElementById("book-author").value;
    //     const newImg = document.getElementById("book-img").value;

    //     const newBook = {name: newTitle, year: newYear, author: newAuthor, img: newImg}; 

    //     setBook(b => [...b, newBook]);
    // }

    const handleBookChange = () => {

        const newBook = {name: bookTitle, year: bookYear, author: bookAuthor, img: bookImg};
        setBook(b => [...b, newBook]);
        setTitle("");
        setYear("");
        setAuthor("");
        setImg("");
        
    }

    const removeBook = (index) => {
        setBook(books.filter((_, i) => index !== i));
    }

    const handleNameChange = (e) => {
        setTitle(e.target.value);
    }
    const handleYearChange = (e) => {
        setYear(e.target.value);
    }
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handleCoverChange = (e) => {
        setImg(e.target.value);
    }

    return(
        <>
        <hr/>
        <div className="flex-container">
            <h1>Update an Array of Objects in state</h1>
            <ul className="book-shelf">
                {books.map((book, index) => 
                    <li className="book" key={index} >
                        <span onClick={() => removeBook(index)} title="remove">✖️</span>
                        <img className="book-cover" src={book.img}/>
                        <h2>{book.name}</h2>
                        <p>{book.year}</p>
                        <p>by {book.author}</p>
                    </li>
                )}
            </ul>
            <div className="flex-container">
                <p>Enter a new book:</p>
                <input id="book-name" type="text" value={bookTitle} placeholder="Enter book title" onChange={handleNameChange}/>
                <input id="book-year" type="number" value={bookYear} placeholder="Enter year" onChange={handleYearChange}/>
                <input id="book-author" type="text" value={bookAuthor} placeholder="Enter author" onChange={handleAuthorChange}/>
                <input id="book-img" type="text" value={bookImg} placeholder="Enter image link" onChange={handleCoverChange}/>
                <br/>
                <button id="submit-btn" onClick={handleBookChange}>Submit</button>
            </div>
        </div>
        <hr/>
        </>
    );

}

export default UpdateArrayofObjects;

//NOTE: broCode version 

// import React, {useState} from 'react';

// function UpdateArrayofObjects(){
//     const [cars, setCars] = useState([]);

//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState("");
//     const [carModel, setCarModel] = useState("");

//     function handleAddCar(){

//         const newCar = {year: carYear, make: carMake, model: carModel};

//         setCars(c => [...c, newCar]);

//         setCarYear(new Date().getFullYear());
//         setCarMake("");
//         setCarModel("");
//     }

//     function handleRemoveCar(index){
//         setCars(c => c.filter((_, i) => index !== i));
//     }

//     function handleYearChange(event){
//         setCarYear(event.target.value);
//     }

//     function handleMakeChange(event){
//         setCarMake(event.target.value);
//     }

//     function handleModelChange(event){
//         setCarModel(event.target.value);
//     }

//     return(
//         <div>
//             <h2>List of Car Objects</h2>
//             <ul>
//                 {cars.map((car, index) => 
//                 <li key={index} onClick={()=>handleRemoveCar(index)}>
//                     {car.year} {car.make} {car.model}</li>)}
//             </ul>


//             <input type="number" value={carYear} onChange={handleYearChange}/><br/>
//             <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Make"/><br/>
//             <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Model"/><br/>
//             <button onClick={handleAddCar}>Add Car</button>
//         </div>


//     );
// }

// export default UpdateArrayofObjects;