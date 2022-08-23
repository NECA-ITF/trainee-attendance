import React from 'react'
import './SliderHeader.css'

function SliderHeader() {
  return (
    <div className="attend-slider-header">
        <div className="attend-slider-header-left">
            <h2>Attendance</h2>
            <h2 className="attend-header-month">Month-August</h2>
        </div>
        <div className="attend-slider-header-right">
            <h2>Date:19th August 2022</h2>
        </div>
    </div>
  )
}

export default SliderHeader