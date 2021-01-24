import React , { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';


const Join = () => {
    const [ name , setName ] = useState('');
    const [ room , setRoom ] = useState('');
    
    const handleOnChange = (e) => {
        console.log(e);
    }
    useEffect(()=>{
       console.log('change')
    },[name,room])
    return(
        <div className = "OuterJoinContainer">
            <div className = "InnerJoinContainer">
                <input type = "text" className = "InputJoin" onChange = {(e) => setName(e.target.value)} />
                <input type = "text" className = "InputJoin" onChange = {(e) => setRoom(e.target.value)} />
                <Link to = {`chat?name=${name}&room=${room}`} onClick = {(e) => (!name || !room) ? e.preventDefault() : null }>
                    <button type = "submit">Submit</button>
                </Link>
            </div>
        </div>
    )


}
export default Join;