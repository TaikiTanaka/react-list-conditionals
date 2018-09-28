import React from 'react';

const validateComponent = (props)=>{
    let validationString='Text is long enough';
    if(props.length<5)
        validationString='Text is too short'
    return(
        <div>
            <p>{validationString}</p>
        </div>
    )
};

export default validateComponent;