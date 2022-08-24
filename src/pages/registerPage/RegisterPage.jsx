import React from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import './RegisterPage.css';
import avatar from '../../assets/images/avatar.jpeg';
import logo from '../../assets/images/itf-logo.jpg';
import bg from '../../assets/images/bg.png';
function RegisterPage() {
  return (
      <div className='register-page'>
        
          <div className='form-div'>
            <form action="" className='form'>
              <div className='logo-h1-div'>
                <img src={logo} alt="logo" width={40}/>
                <h1 className="itf-title">INDUSTRIAL TRAINING FUND</h1>
              </div>
              <div className='avatar-div'>
                <img className="avatar" src={avatar} alt="avatar" width={150}/>
              <h4 className="attendance-title">ATTENDANCE SERVICE</h4>
              </div>
              
              <div className='custom-input'>
                <CustomInput placeholder="Email Address" className="input" backgroundColor='#eeeeee' outline='none'/>
                <CustomInput placeholder="Phone Number" className="input" backgroundColor='#eeeeee' outline='none'/>
                <CustomInput placeholder="Full Name" backgroundColor='#eeeeee' outline='none' className="input"/>
                <CustomInput type="password" placeholder="Password" backgroundColor='#eeeeee' outline='none' className="input"/>
                <CustomInput type="password" placeholder="Confirm Password" backgroundColor='#eeeeee' outline='none' className="input"/>
              </div>
              <div className='gen'>
                  <h3>Gender</h3>
                <div className='gender-div'>
                  <div className='all-gen'>Female <input type='radio' name='terms'/></div>
                  <div className='all-gen'>Male <input type='radio' name='terms'/></div>
                </div>
              </div>
              
              <div className='custom-button'>
                <CustomButton title='Sign Up' borderRadius={2} width={'68%'} className="button" />
              </div>
              
              <h4>Have an account? <span className="login">Log in</span></h4>
            </form>
          </div>


            <img id='image' src={bg} className="pix" alt='bg' />
      </div>

    
  );
}

export default RegisterPage;