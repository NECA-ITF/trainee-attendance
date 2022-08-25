import React, { Component } from 'react'
import ProfileDetails from '../../components/profileDetails/ProfileDetails'
import ProfileImage from '../../components/profileImage/ProfileImage'
import './ProfilePage.css'
// import { MdDashboard } from "react-icons/md";
import DashboardIcon from '../../components/DashboardIcon/DashboardIcon'
import Header from '../../components/DashboardHeader/DashboardHeader'
import { Link } from 'react-router-dom';
export default class ProfilePage extends Component {
  render() {
    return (
      <div className='pcont'> 
        <Header dash = {<Link to="/dashboard" className="links"><DashboardIcon /></Link>}/>
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
