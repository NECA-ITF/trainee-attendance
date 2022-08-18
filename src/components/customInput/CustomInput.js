import React from 'react';
import './CustomInput.css';

function CustomInput({placeholder, ...otherProps}) {
  return (
    <input style={{...otherProps}} placeholder={placeholder} className='input'></input>

  )
}

export default CustomInput;
