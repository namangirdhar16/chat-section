import React from 'react';

const Input = ({message , setMessage , sendMessage }) => {
    return (
        <form>
            <input type = "text"  value = {message} onChange = {(e)=>setMessage(e.target.value)} onKeyPress = {(e)=>e.key==="Enter"?sendMessage(e): null} /> 
            <button type = "submit" onClick = {(e)=>sendMessage(e)}>Send Message</button>
        </form>
    )
}

export default Input;