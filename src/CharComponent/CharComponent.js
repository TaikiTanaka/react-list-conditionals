import React from 'react'
import './CharComponent.css';

const charComponent=(props)=>{
    return(
    <div>
        <p 
        className='charComponent'
        value={props.value}
        onClick={props.click}
        >
        I am the Char Component: {props.char}</p>
    </div>
    )
}

export default charComponent ;