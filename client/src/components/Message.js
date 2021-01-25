import React from 'react';

const Message = ({ message , name }) => {
   
    let sentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    console.log(name);
    console.log(message.user.name);
    if(message.user.name === trimmedName)
    sentByCurrentUser = true;
    console.log(message , name);
    
    const renderElement = (sentByCurrentUser) => {
        return (
            sentByCurrentUser ? (
                <div className = "rightPositined" >
                    <p>{trimmedName}</p>
                    <div>{message.text}</div>
                </div>
            ) : (
                <div className = "leftPositined" >
                <p>{message.user.name}</p>
                <div>{message.text}</div>
                </div>
            )
        )
    }
    return(
        
       <div>{renderElement(sentByCurrentUser)}</div>
    )
}

export default Message;