import './Dashboard.css'
import React from 'react'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import AttendanceSlider from '../../components/AttendanceSlider/AttendanceSlider'
import AttendanceItems from '../../components/AttendanceItems/AttendanceItems'
import profile_img from '../../assets/images/Screenshot4.png';
import {Link} from 'react-router-dom';
function Dashboard() {
  return (
    <div className='dashBoard'>
      <DashboardHeader dash={<Link to="/profile" className="links"><img src={profile_img} alt="profile-pic" /></Link>} />
        <div className="dashboardContainer">
            <AttendanceSlider />
            <AttendanceItems/>
        </div>
    </div>
  )
}

export default Dashboard

