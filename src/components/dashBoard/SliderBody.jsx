import React from 'react'
import './SliderBody.css'
import SliderCard from './SliderCard'
function SliderBody() {
  return (
    <div className="attendance-slider">
        <h1 className="angle left-angle">{'<'}</h1>
            <div className="attendance-slider-cards">
                <SliderCard />
                <SliderCard />
                <SliderCard />
                <SliderCard />
            </div>
        <h1 className="angle right-angle">{'>'}</h1>
    </div>
  )
}

export default SliderBody