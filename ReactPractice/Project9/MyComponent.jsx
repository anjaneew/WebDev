import React, {useState} from 'react';
 
function MyComponent(){

    const [name, setName] = useState("Guest");
    const [votes, setVotes] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    //note: HIDDEN RULE : here there is a parameter - but not passed as argument in function call
    const handleNameChange = e => setName(e.target.value); 
    const handleVoteChange = e => setVotes(e.target.value);
    const handleCommentChange = e => setComment(e.target.value);
    const handlePaymentChange = e => setPayment(e.target.value);
    const handleShippingChange = e => setShipping(e.target.value);


    // tutor wrote this but i used arrow function instead 
    // function handleNameChange(event){
    //     setName(event.target.value);
    // }

    return(
            <>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name"/> 
            <p>Name: {name}</p>

            <input type="number" value={votes} onChange={handleVoteChange} placeholder="Enter votes"/>
            <p>Votes: {votes}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter comments here"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select a method</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" onChange={handleShippingChange} checked={shipping === "Pick Up"} /> 
                Pick Up
            </label><br/>

            <label>
                <input type="radio" value="Delivery" onChange={handleShippingChange} checked={shipping === "Delivery"} />
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
            </>
    );

    /** checked={shipping === "Pick Up"} is a boolean expression, not a conditional rendering.
        it's setting a prop's value based on state.
        when user clicks Pickup, onChange fires → setShipping("Pick Up") runs → state updates → checked={shipping === "Pick Up"} becomes true

        1 User clicks "Pick Up" radio.
        2 onChange={handleShippingChange} runs → setShipping("Pick Up") updates state.
        3 React re-renders the component.
        4 checked={shipping === "Pick Up"} now evaluates to true.
        5 React marks "Pick Up" as selected (checked). - blue dot  */

    //here the function call is not a callback function like:
    // onChange={(e)=>updateName(e)}
}

export default MyComponent

//Note to self: In event handlers, why is it not necessary to pass the event into the function call?
//HIDDEN RULE :  events are automatically passed to the event handler function if it is the only argument

