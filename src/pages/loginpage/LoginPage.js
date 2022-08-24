import React from 'react'
import './LoginPage.css'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/customInput/CustomInput'
import emailsvg from '../../assets/images/emailsvg.png'
import passwordsvg from '../../assets/images/passwordsvg.png'
import avatar from '../../assets/images/avatar.jpeg'
import logo from '../../assets/images/itf-logo.jpg'

function Login() {
    return (
        <div className='login-page'>
            <div className='login-page-left'>
                <div className='login-page-left-inside'>
                    <div className='login-page-header'>
                        <img src={logo} alt= 'itf logo' />
                        <h2>INDUSTRIAL TRANING FUND</h2>
                    </div>
                    <div className='avatext'>
                        <img src={avatar} alt='avatar' />
                        <h2>
                            ATTENDANCE SERVICE
                        </h2>
                    </div>
                    <form className='login-page-form'>
                        <div className='email-input'>
                            <img src={emailsvg} alt ='emailsvg' />
                            <CustomInput border = 'none' placeholder={'Email Address or Number'} />
                        </div>
                        <div className='pass-input'>
                            <img src={passwordsvg} alt ='emailsvg' />
                            <CustomInput border = 'none'  placeholder={'Password'} />
                        </div>
                        <CustomButton title={'Log In'} boxShadow = '0px 0px 2px rgba(0, 0, 0, 0.15)' width = '400px' borderRadius = '0px' backgroundColor = 'rgba(255, 0, 0, 0.2)' fontSize = '1.2rem' fontWeight = 'bold'/>
                        <div className='forgotpass'>
                            <h2 >Forgotten password ?</h2>
                        </div>
                        <CustomButton title={'Create New Account'} boxShadow = 'none' width = '300px' borderRadius = '20px' backgroundColor = 'rgba(11, 133, 11, 0.55)' fontSize = '1.2rem' fontWeight = 'bold' marginBottom = '10px' />
                    </form>
                </div>
            </div>
            <div className='login-page-right'>
            </div>
        </div>
    )
}

export default Login
 
