import React from 'react'
import './CustomButton.css';

function CustomButton({title, ...otherProps}){
  return (
    <button {...otherProps} className='buttons'>{title}</button>
  )
}
export default CustomButton;

