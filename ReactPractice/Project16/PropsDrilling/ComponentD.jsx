
function ComponentD(props){

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>Nice to meet you {props.name}</h2> 
            <p>{`Bye ${props.user}`}</p>
        </div>
    );

}

export default ComponentD;
