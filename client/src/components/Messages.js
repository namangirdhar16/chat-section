import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';
const Messages = ({ messages , name }) => {
    return (
        <ScrollToBottom>
          {messages.map((message , i)=>
            { 
              
            return <div ><Message message = {message} name = {name} key = {i} /></div>}
          )}
        </ScrollToBottom>
    )
}

export default Messages;