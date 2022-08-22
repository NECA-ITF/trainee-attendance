import React from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import './RegisterPage.css'
import avatar from './images/avatar.jpeg'
import logo from './images/logo.jpeg'
import bg from './images/bg.png'
function RegisterPage() {
  return (
      <div className='register-page'>
        <div className='register-container'>
          <div className='form-div'>
            <form action="" className='form'>
              <div className='logo-h1-div'>
                <img src={logo} alt="logo" width={50}/>
                <h4>INDUSTRIAL TRAINING FUND</h4>
              </div>
              <div className='avatar'>
                <img src={avatar} alt="avatar" width={150}/>
              <h2 style={{ fontWeight:'100'}}>ATTENDANCE SERVICE</h2>
              </div>
              
              <div className='custom-input'>
                <CustomInput placeholder="Email Address" className="input" backgroundColor='#EEEEEE' outline='none'/><br />
                <CustomInput placeholder="Phone Number" className="input" backgroundColor='#EEEEEE' outline='none'/><br />
                <CustomInput placeholder="Full Name" backgroundColor='#EEEEEE' outline='none' className="input"/><br />
                <CustomInput type="password" placeholder="Password" backgroundColor='#EEEEEE' outline='none' className="input"/><br />
                <CustomInput type="password" placeholder="Confirm Password" backgroundColor='#EEEEEE' outline='none' className="input"/>
              </div>
              <div className='gen'>
                  <h3>Gender</h3>
                <div className='gender-div'>
                  <div className='all-gen'>Female <input type='radio' name='terms'/></div>
                  <div className='all-gen'>Male <input type='radio' name='terms'/></div>
                </div>
              </div>
              
              <div className='custom-button'>
                <CustomButton title='Sign Up' borderRadius={2} width={300} />
              </div>
              
              <h4>Have an account? <span style={{ color:'blue'}}>Log in</span></h4>
            </form>
          </div>


            <img id='image' src={bg} className="pix" alt='bg' />
        </div>
      </div>

    
  );
}

export default RegisterPage;