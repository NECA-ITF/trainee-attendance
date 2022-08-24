import React from 'react';
import './CustomInput.css';

function CustomInput({placeholder, type, ...otherProps}) {
  return (
    <input style={{...otherProps}} placeholder={placeholder} type={type} className='input'></input>

  )
}

export default CustomInput;
