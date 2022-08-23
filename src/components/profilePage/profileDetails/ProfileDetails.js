import React, { Component } from 'react'
import "./ProfileDetails.css"
import phone from '../../../assets/images/phone.png'
import mail from '../../../assets/images/mail.png'
import profile from '../../../assets/images/profile.png'
import lock from '../../../assets/images/lock.png'

export default class ProfileDetails extends Component {
  render() {
    return (
      <div>
        <div className='proDetFlex'>
          <span className='proDet'><img src={phone} alt='...' width='20px' height='20px'/> <h4 className='padLeft'> 07017349499</h4></span>
          <span className='proDet'><img src={mail} alt='...' width='20px' height='20px'/><h4 className='padLeft'> Fikijosh@gmail.com</h4></span>
        </div>
        <div className='proDetFlex'>
          <span className='proDet'><img src={profile} alt='...' width='20px' height='20px'/> <h4 className='padLeft'> Female</h4></span>
          <span className='proDet'><img src={lock} alt='...' width='20px' height='20px'/><h4 className='padLeft'> xxx xx25</h4></span>
        </div>
      </div>
    )
  }
}
