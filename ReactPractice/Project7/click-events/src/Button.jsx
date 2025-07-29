
function Button(){

    const handleClick = () => console.log("🥰😍😘");

    //senario - with parameters
    const handleClick2 = (name) => console.log(`${name}, stop this now!`);

    return(
        <>
        <button onClick={handleClick}>Click me! 💘</button> <br></br>
        {/* //immidiately calls
        <button onClick={handleClick2("Yo!")}>Click me! 😁</button> */}
        <button onClick={()=> handleClick2("Yo!")}>Click me! 😁</button>
        </>
    );
}

export default Button