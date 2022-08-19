import React from 'react'
import './CustomButton.css';

function CustomButton({title, ...otherProps}){
  return (
    <button style={{...otherProps}} className='buttons'>{title}</button>
  )
}
export default CustomButton;

