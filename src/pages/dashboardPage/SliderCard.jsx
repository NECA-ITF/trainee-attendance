import React from 'react'
import './SliderCard.css'
import image1 from './resource/Screenshot1.png'
// import image3 from './resource/Screenshot3.png'
// import image4 from './resource/Screenshot4.png'
import CustomButton from '../../components/customButton/CustomButton'
function SliderCard() {
  return (
        <div className="card">
                <img className="card-image" src={image1} alt="first-profile" />
                <div className="card-percentage">
                    <h1>80%</h1>
                </div>
                <p className="card-stats">Attendance start</p>
                <CustomButton title={'Confirm'} backgroundColor = '#4C956C' margin = '10px 0'  boxShadow = 'none'/>
        </div>
  )
}

export default SliderCard