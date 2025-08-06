import ComponentC from './ComponentC.jsx';

function ComponentB(props){

    return(
        <div className="box">
            <h1>Component B</h1>
            <ComponentC name={props.name}/>
        </div>
    );

}

export default ComponentB;
