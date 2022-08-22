import React from 'react'
import './AttendanceSlider.css'
import CustomButton from '../../components/customButton/CustomButton'
import SliderHeader from './SliderHeader'
import SliderBody from './SliderBody'
function AttendanceSlider() {
  return (
    <div>
        <SliderHeader />
        <SliderBody />
        <div className="confirmButton">
            <CustomButton title={'Confirm'} backgroundColor = 'white' color = '#FF0000' border = '1px solid #FF0000' boxShadow = '0px 5.03867px 5.03867px rgba(0, 0, 0, 0.25)'/>
        </div>
    </div>
  )
}

export default AttendanceSlider