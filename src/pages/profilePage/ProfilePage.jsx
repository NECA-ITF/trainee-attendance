import React, { Component } from 'react'
import ProfileDetails from '../../components/profilePage/profileDetails/ProfileDetails'
import ProfileImage from '../../components/profilePage/profileImage/ProfileImage'
import './ProfilePage.css'
import CustomButton from '../../components/customButton/CustomButton'
import Header from '../../components/dashBoard/DashboardHeader'

export default class ProfilePage extends Component {
  render() {
    return (
      <div className='contpro'>
        <Header/>
        <div id="profileFlex">
          <div id='profilecontainer'>
              <ProfileImage/>
              <ProfileDetails/>
              <div className='contFlex'>
                <CustomButton title='Edit My Profile' width='63%' height = '65%' margin-bottom ='1rem'/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
