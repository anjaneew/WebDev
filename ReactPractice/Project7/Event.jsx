//Event parameters

function Event(){

    const handleClick1 = (e) => {
        console.log(e);
        // e.target.innerText = "Hi";
        e.target.textContent = "Ouch🪼";

    };

    const handleClick2 = (e) => e.target.textContent = "😵"


    return(
        <>
        <button onClick={(e)=>handleClick1(e)}>Learning about Event Parameters more 😁</button><br></br>
        <button onDoubleClick={(e)=> handleClick2(e)}>☺️</button>
        </>
    );
}

export default Event