import React from 'react';



const onlineIcon = '';
const InfoBar = (props) => {
    return (
        <div>
            <h1>InfoBar</h1>
            <img src = {onlineIcon} alt = "onlineIcon"/>
            <a href = "/" >close</a>
            <h3>{props.room}</h3>
        </div>
    )
}
export default InfoBar;