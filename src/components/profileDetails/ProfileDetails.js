import React, { Component } from 'react'
import "./ProfileDetails.css"
import phone from '../../assets/images/phone.png'
import mail from '../../assets/images/mail.png'
import profile from '../../assets/images/profile.png'
import lock from '../../assets/images/lock.png'
import CustomButton from '../customButton/CustomButton'
import ProfileImage from '../profileImage/ProfileImage';
export default class ProfileDetails extends Component {
  render() {
    return (
      <div>
        <ProfileImage />
        <div id='marBot'>
          <h1 id='Myprofile'> Maryam xxxx</h1>
            <hr id='detHr'/>
          <div className='proDetFlex'>
            <span className='proDet'><img src={phone} alt='...' className='proDetImg'/> <h4 className='padLeft'> 07017349499</h4></span>
            <span className='proDet'><img src={mail} alt='...' className='proDetImg'/><h4 className='padLeft'> Fikijosh@gmail.com</h4></span>
          </div>
          <div className='proDetFlex'>
            <span className='proDet'><img src={profile} alt='...' className='proDetImg'/> <h4 className='padLeft'> Female</h4></span>
            <span className='proDet'><img src={lock} alt='...' className='proDetImg'/><h4 className='padLeft'> xxx xx25</h4></span>
          </div>
          <div className='contBtn'>
            <CustomButton title='Edit My Profile' width='93%' height = '65%' margin-bottom ='1rem'/>          
          </div>
          <div className='contBtn1'>
            <CustomButton title='Edit My Profile' width='55%' height = '1%' margin-bottom ='1rem'/>          
          </div>
        </div>
      </div>
    )
  }
}