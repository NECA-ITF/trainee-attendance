import React from 'react'
import './Login.css'
import CustomButton from '../loginpage/customButton/CustomButton'
import itf_logo from '../loginpage/itf_logo.png'
import profile_picture from '../loginpage/profile_picture.png'

function Login() {
    return (
        <div className='loginPage'>
            <form action="">
                
            <div className='logo'>
                <h1><img src={itf_logo} alt="itf-logo" id='Itflogo' /><b>INDUSTRIAL TRAINING FUND</b></h1>
            </div>

            <div className='profilePicture'>
                <img src={profile_picture} alt="profile-picture" id='ProfilePicture' />
                <h2>ATTENDANCE SERVICE</h2><br/>
            </div>

            {/* // Maryam section */}
            {/* <div class="emailInput"> */}
                
            {/* <div class="passwordInput"> */}
             

            <div className='login'>
                <CustomButton title="Log In"/>
            </div><br/>

            <p id='forgotPassword' >Forgotten password ?</p><br/>

            <hr/><br/>

            <CustomButton title ="Create New Page"/>
            
            </form>
        </div>
    )
}

export default Login