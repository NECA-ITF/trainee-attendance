import React, { useState } from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import './RegisterPage.css'
import avatar from './images/avatar.jpeg'
import logo from './images/logo.jpeg'
import bg from './images/bg.jpeg'
function RegisterPage() {
  return (
    <div>
      <div className='form-div'>
        <form action="">
          <div className='logo/h1-div'>
            <img src={logo} alt="logo" />
            <h1>INDUSTRIAL TRAINING FUND</h1>
          </div>
          <img src={avatar} alt="avatar" />
          <h1>ATTENDANCE SERVICE</h1>
          <div className='custom-input'>
            <CustomInput placeholder="Email Address or Number" width={450} /><br />
            <CustomInput placeholder="Full Name" width={450}/><br />
            <CustomInput placeholder="Password" width={450}/><br />
            <CustomInput placeholder="Confirm Password" width={450}/>
          </div>
          
          <h3>Gender</h3>
          <div className='gender-div'>
            <div className='female'>Female <input type='radio' name='terms'/></div>
            <div className='male'>Male <input type='radio' name='terms'/></div>
          </div>
          <div className='custom-button'>
            <CustomButton placeholder='Sign Up' width={400}/>
          </div>
          
          <h4>Have an account? <span>Log in</span></h4>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;