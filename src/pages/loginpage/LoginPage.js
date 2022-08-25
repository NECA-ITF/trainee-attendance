import React from 'react'
import './LoginPage.css'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/customInput/CustomInput'
import emailsvg from '../../assets/images/emailsvg.png'
import passwordsvg from '../../assets/images/passwordsvg.png'
import avatar from '../../assets/images/avatar.jpeg'
import logo from '../../assets/images/itf-logo.jpg'
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className='login-page'>
            <div className='login-page-left'>
                <div className='login-page-left-inside'>
                    <div className='login-page-header'>
                        <img src={logo} alt= 'itf logo' />
                        <h2>INDUSTRIAL TRANING FUND</h2>
                    </div>
                    <div className='avatext'>
                        <img src={avatar} alt='avatar'/>
                        <h4>
                            ATTENDANCE SERVICE
                        </h4>
                    </div>
                    <form className='login-page-form'>
                        <div className='email-input'>
                            <img src={emailsvg} alt ='emailsvg' />
                            <CustomInput border = 'none' placeholder={'Email Address or Number'} type="text"/>
                        </div>
                        <div className='pass-input'>
                            <img src={passwordsvg} alt ='emailsvg' />
                            <CustomInput border = 'none'  placeholder={'Password'} type="password"/>
                        </div>
                        <Link className="links" to="/dashboard">
                            <CustomButton title={'Log In'}  width = '400px' borderRadius = '0px' fontSize = '1.2rem' fontWeight = 'bold'/>
                        </Link>
                        <div className='forgotpass'>
                            <h3>Forgotten password ?</h3>
                        </div>
                        <Link className="links" to="/register">
                            <CustomButton title={'Create New Account'} boxShadow = 'none' width = '300px' borderRadius = '15px' backgroundColor = 'rgba(11, 133, 11, 0.55)' fontSize = '1.2rem' fontWeight = 'bold' marginBottom = '10px' />
                        </Link>
                    </form>
                </div>
            </div>
            <div className='login-page-right'>
            </div>
        </div>
    )
}

export default LoginPage;
 
