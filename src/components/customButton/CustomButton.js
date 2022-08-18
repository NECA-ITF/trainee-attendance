import React from 'react'
import './CustomButton.css';


function CustomButton({title, width, height, borderRadius}) {
  return (
       <button style={{width:width,height:height, borderRadius:borderRadius}} className='Cusbutton'>{title}</button>
  )
}

export default CustomButton
