import React from 'react'
import './LoginPage.css'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/customInput/CustomInput'
import emailsvg from '../../assets/images/emailsvg.png'
import passwordsvg from '../../assets/images/passwordsvg.png'
import avatar from '../../assets/images/avatar.jpeg'
import logo from '../../assets/images/logo.jpeg'
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
                        <img src={avatar} alt="profile-picture" id='avatar' />
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
                        <CustomButton id="loginButton" title="Log In" width={500} borderRadius={0} fontSize={30} fontWeight={"bold"} padding={10}/>
                    </div>


                    <p id='forgotPassword' >Forgotten password ?</p>

                    <div className='line'> </div>

                    <div className='create-new'>
                        <CustomButton title ="Create New Account" borderRadius={10} backgroundColor={"green"} width={300} fontSize={25} padding={20} textAlign={"center"}/>
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