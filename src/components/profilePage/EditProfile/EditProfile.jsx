import React from 'react'
import CustomInput from '../../customInput/CustomInput'
import CustomButton from '../../customButton/CustomButton'
import './EditProfile.css'
function EditProfile() {
  return (
    <div className='econt'>
        <h2>New Profile Information</h2>
        <div className="econtent">
            <h4>Name</h4>
            <div className="custinput">
                <CustomInput border = '1px solid black' width = '85%' height = '10px'/>
            </div>
            <h4>Email</h4>
            <div className="custinput">
                <CustomInput border = '1px solid black' width = '85%' height = '10px'/>
            </div>
            <h4>Password</h4>
            <div className="custinput">
                <CustomInput border = '1px solid black' width = '85%' height = '10px'/>
            </div>
            <h4>Confirm Password</h4>
            <div className="custinput">
                <CustomInput border = '1px solid black' width = '85%' height = '10px'/>
            </div>
            <div className="custbtn">
                <CustomButton title = 'Confirm Changes' width = '80%' font-size = '1.09rem' font-weight = 'bold' box-shadow = 'none' border-radius = '15px'/>
            </div>
        </div>
    </div>
  )
}

export default EditProfile