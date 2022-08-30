import React from 'react';
import './CustomInput.css';

function CustomInput({placeholder, type, ...otherProps}) {
  return (
    <input {...otherProps} placeholder={placeholder} type={type} className='input'/>

  )
}

export default CustomInput;
