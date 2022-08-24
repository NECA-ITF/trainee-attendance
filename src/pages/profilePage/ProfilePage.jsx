import React, { Component } from 'react'
// import ProfileDetails from '../../components/profilePage/profileDetails/ProfileDetails'
// import ProfileImage from '../../components/profilePage/profileImage/ProfileImage'
import EditProfilePage from '../../components/profilePage/EditProfile/EditProfile'
import './ProfilePage.css'

import Header from '../../components/DashboardHeader/DashboardHeader'

export default class ProfilePage extends Component {
  render() {
    return (
      <div className='fix'> 
        <Header />
        <div id="profileFlex">
          {/* <div className='profilecontainer'>
              <ProfileImage/>
              <ProfileDetails/>
          </div> */}
          <div className='profilecontainer' style={{width: '40%', height: '80%'}}>
            <EditProfilePage />
          </div>
        </div>
      </div>
    )
  }
}
