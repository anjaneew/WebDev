
function UserGreeting(props){

    return(props.isLoggedIn ? <h1>Welcome!</h1> : <h3>Please log in to continue.</h3>);
}

export default UserGreeting