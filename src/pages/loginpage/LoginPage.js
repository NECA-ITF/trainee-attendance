import React from 'react'
import './LoginPage.css'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/customInput/CustomInput'
import emailsvg from '../../assets/images/emailsvg.png'
import passwordsvg from '../../assets/images/passwordsvg.png'
import avatar from '../../assets/images/avatar.jpeg'
import logo from '../../assets/images/itf-logo.jpg'
import bg from '../../assets/images/bg.png'

function Login() {
    return (
        <div className='login-page'>

            <div className='left'>

                <form action="">

                    <div className='main-logo'>
                        <img src={logo} alt="itf-logo" id='Itflogo' />
                        <h1><b>INDUSTRIAL TRAINING FUND</b></h1>
                    </div>


                    <div className='avatar'>
                        <img src={avatar} alt="profile-pictur" id='avatar' />
                        <h2>ATTENDANCE SERVICE</h2><br/>
                    </div>


                    <div className='email-input'>
                        <img src={emailsvg} id="emailsvg" alt="" width={20} />
                        <CustomInput placeholder={"Email address or Number"}backgroundColor={"whitesmoke"} border={"none"} outline={"none"} fontSize={20}/>
                    </div>

                    <div className='password-input'>
                        <img src={passwordsvg} id="passwordsvg" alt="" width={20}/>
                        <CustomInput placeholder={"Password"} backgroundColor={"whitesmoke"} border={"none"} outline={"none"} fontSize={20} />
                    </div>


                    <div className='login-button'>
                        <CustomButton id="loginButton" title="Log In" width={'60%'} borderRadius={0} fontSize={20} padding={8} 
                        box-shadow=  '0px 0px 2px rgba(0, 0, 0, 0.25)' />
                    </div>


                    <p id='forgotPassword' >Forgotten password ?</p>

                    <div className='line'> </div>

                    <div className='create-new'>
                        <CustomButton title ="Create New Account" borderRadius={10}  width={'300px'} fontSize={20} padding={15} textAlign={"center"} background = 'rgba(11, 133, 11, 0.55)'
                        border-radius= '20px'/>
                    </div>

                </form>
            </div>

            <div className='bgright'>
                <img src={bg} alt="" />
            </div>
        </div>
    )
}

export default Login
 
