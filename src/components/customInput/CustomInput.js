import React from 'react'
import './CustomInput.css'

function CustomInput({placeholder, width, height, borderRadius}) {
  return (
      <input placeholder={placeholder} style={{width:width, height:height, borderRadius:borderRadius}} className="input"></input>
  )
}

export default CustomInput
