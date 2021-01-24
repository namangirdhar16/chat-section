import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

import queryString from 'query-string';

let socket;

const Chat = () => {
    const [name , setName ] = useState('');
    const [room , setRoom ] = useState('');
    const EndPoint = "localhost:8000";

    useEffect(()=>{

        const { name ,room } = queryString.parse(window.location.search,{ignoreQueryPrefix: true});
        socket = io(EndPoint);

        setName(name);
        setRoom(room);

        console.log(socket);
        socket.emit('join',{ name , room },({err})=>{
            if(err)
            console.log(err);
            else
            console.log('there is no error');
        });

        // when the event unmounts 
        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    },[EndPoint,window.location.search])


    return (
        <div>Chat</div>
    )
}
export default Chat;