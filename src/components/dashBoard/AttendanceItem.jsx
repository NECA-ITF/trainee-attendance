import React from 'react'
import CustomButton from '../customButton/CustomButton';
import './AttendanceItem.css'
import itf_log from '../../assets/images/itf-logo.jpg'
function AttendanceItem() {
  return (
    <div className='attenditem'>
        <p className="serialnum item">1</p>
        <div className='nameimage item' >
            <img className='image' src={itf_log} alt=""/>
             <p>John Doe</p>
        </div>
        <div className='dateday item'>
            <p>21/08/2022</p>
            <p>Sunday</p>
        </div>
        <div className='logintime item'>8:00am</div>
        <div className='logout item'>6:00pm</div>
        <div className="item">
          <CustomButton title='view' background-color='white' color='red' border='1px solid red' boxShadow = 'none'/>
        </div>
    </div>
    
  )
}

export default AttendanceItem;