import React, { Component } from 'react'
import ProfileDetails from '../profileDetails/ProfileDetails'
import ProfileImage from '../profileImage/ProfileImage'
import './ProfilePage.css'
import CustomButton from '../../../components/customButton/CustomButton'

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <div id="profileFlex">
          <div id='profilecontainer'>
              <ProfileImage/>
              <ProfileDetails/>
              <div className='hamidat'>
                <CustomButton title='Edit My Profile' width='50%'/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
