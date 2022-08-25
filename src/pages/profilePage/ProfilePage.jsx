import React, { Component } from 'react'
import ProfileDetails from '../../components/profilePage/profileDetails/ProfileDetails'
import ProfileImage from '../../components/profilePage/profileImage/ProfileImage'
import './ProfilePage.css'
import { MdDashboard } from "react-icons/md";
import Header from '../../components/DashboardHeader/DashboardHeader'

export default class ProfilePage extends Component {
  render() {
    return (
      <div className='pcont'> 
        <Header dash = {<MdDashboard />}/>
        <div id="profileFlex">
          <div className='profilecontainer'>
              <ProfileImage/>
              <ProfileDetails/>

          </div>
        </div>
      </div>
    )
  }
}
