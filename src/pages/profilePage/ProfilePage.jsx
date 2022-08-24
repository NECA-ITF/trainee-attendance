import React, { Component } from 'react'
import ProfileDetails from '../../components/profilePage/profileDetails/ProfileDetails'
import ProfileImage from '../../components/profilePage/profileImage/ProfileImage'
import './ProfilePage.css'

import Header from '../../components/dashBoard/DashboardHeader'

export default class ProfilePage extends Component {
  render() {
    return (
      <div className='fix'> 
        <Header />
        <div id="profileFlex">
          <div id='profilecontainer'>
              <ProfileImage/>
              <ProfileDetails/>
          </div>
        </div>
      </div>
    )
  }
}
