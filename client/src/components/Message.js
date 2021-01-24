import React from 'react';

const Message = ({ message , name }) => {
   
    let sentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(message.user == trimmedName)
    sentByCurrentUser = true;
    console.log(message , name);
    return(
        sentByCurrentUser ? (
            <div className = "rightPositined">
                <p>{trimmedName}</p>
                <div>{message.text}</div>
            </div>
        ) : (
            <div className = "leftPositined">
            <p>{message.user}</p>
            <div>{message.text}</div>
            </div>
        )
    )
}

export default Message;