import React, { useState } from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import bg from './images/bg.jpeg'
import './RegisterPage.css';
function RegisterPage() {
  return (
    <div className='register-page'>
        <div className='register-container'>
          <img src={bg} className="pix" alt='bg'/>
        </div>
    </div>
  );
}

export default RegisterPage;