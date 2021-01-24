import React, { useCallback, useEffect, useState } from 'react'
import { io } from 'socket.io-client';

import queryString from 'query-string';

let socket;

const Chat = () => {
    const [name , setName ] = useState('');
    const [room , setRoom ] = useState('');
    const [message , setMessage] = useState('');
    const [messages , setMessages] = useState([]);
    
    const EndPoint = "localhost:8000";

    useEffect(()=>{

        const { name ,room } = queryString.parse(window.location.search,{ignoreQueryPrefix: true});
        socket = io(EndPoint);

        setName(name);
        setRoom(room);

        console.log(socket);
        socket.emit('join',{ name , room },(error)=>{
            if(error)
            console.log(error);
            else
            console.log('there is no error');
        });

        // when the event unmounts 
        return () => {
          //  socket.emit('disconnect');
            // to turn off the user that has left
            socket.off();
        }

    },[EndPoint,window.location.search])

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]);
        })
    },[messages])

    const handleOnChange = (e) =>{
        console.log(e.target.value);
    }
    const sendMessage = (e) => {
      // e.preventDefault();
      if(message)
      {
          socket.emit('sendMessage',message,()=>setMessage(''));
      }
       
    }
    console.log(message , messages);
    return (
        <div className = "outerChatContainer">
            <div className = "innerChatContainer">
                {/* to handle input as controlled component, we need to set its value to message  */}
                <input type = "text"  value = {message} onChange = {(e)=>setMessage(e.target.value)} onKeyPress = {(e)=>e.key==="Enter"?sendMessage(e): null} />
            </div>
        </div>
        )
}
export default Chat;