
function ChatStatus(props){


    if(props.isOnline){
            return(<p>{props.username} joined the chat.</p>);
        }
    else{
            return(<p>{props.username} left the chat room.</p>);
    }    

}

export default ChatStatus