import React, { useState } from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import './RegisterPage.css'
import avatar from './images/avatar.jpeg'
import logo from './images/logo.jpeg'
import bg from './images/bg.jpeg'
function RegisterPage() {
  return (
      <div className='register-page'>
        <div className='register-container'>
          <div className='form-div'>
            <form action="">
              <div className='logo-h1-div'>
                <img src={logo} alt="logo" width={80}/>
                <h1>INDUSTRIAL TRAINING FUND</h1>
              </div>
              <div className='avatar'>
                <img src={avatar} alt="avatar" width={150}/>
              <h1 style={{ fontWeight:'100'}}>ATTENDANCE SERVICE</h1>
              </div>
              
              <div className='custom-input'>
                <CustomInput placeholder="Email Address or Number" borderBottom='none' width={450} backgroundColor='#EEEEEE' outline='none'/><br />
                <CustomInput placeholder="Full Name" borderBottom='none' backgroundColor='#EEEEEE' outline='none' width={450}/><br />
                <CustomInput placeholder="Password" borderBottom='none' backgroundColor='#EEEEEE' outline='none' width={450}/><br />
                <CustomInput placeholder="Confirm Password" borderBottom='none' backgroundColor='#EEEEEE' outline='none' width={450}/>
              </div>
              <div className='gen'>
                  <h3>Gender</h3>
                <div className='gender-div'>
                  <div className='all-gen'>Female <input type='radio' name='terms'/></div>
                  <div className='all-gen'>Male <input type='radio' name='terms'/></div>
                </div>
              </div>
              
              <div className='custom-button'>
                <CustomButton title='Sign Up' borderRadius={2}  width={450} height={50} backgroundColor='#34B3F1'/>
              </div>
              
              <h4>Have an account? <span style={{ color:'blue'}}>Log in</span></h4>
            </form>
          </div>


            <img id='image' src={bg} className="pix" alt='bg' width={835}/>
        </div>
      </div>

    
  );
}

export default RegisterPage;