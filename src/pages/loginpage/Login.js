import React, { useState } from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import './Login.css'
import avatar from './images/avatar.jpeg'
import logo from './images/logo.jpeg'
import bg from './images/bg.png'
function Login() {
  return (
      <div className='login-page'>
        <div className='login-cont'>
          <div className='login-div'>
            <form action="" className='frm'>
              <div className='mainlogo'>
                <img src={logo} alt="logo" width={80}/>
                <h2>INDUSTRIAL TRAINING FUND</h2>
              </div>
              <div className='avatar'>
                <img src={avatar} alt="avatar" width={150}/>
              <h2 style={{ fontWeight:'100'}}>ATTENDANCE SERVICE</h2>
              </div>

              <div className='custom-input'>
                <CustomInput placeholder="Email Address or Number" className="input" backgroundColor='#EEEEEE' outline='none'/><br />
                <CustomInput placeholder="Password" className="input" backgroundColor='#EEEEEE' outline='none'/><br />
               </div>
                <br/>
              <div className='custom-button'>
                <CustomButton title='Log in' borderRadius={2} width={300} />
              </div>
              <br/>

              <h4>Forgot Password? <span></span></h4>
              <div className='line'></div>
              <div>
              <CustomButton title='create account' borderRadius={8} width={200} backgroundColor='green' />
              </div>
            </form>
          </div>





            <img id='image' src={bg} className="pix" alt='bg' />
        </div>
      </div>


  );
}

export default Login;