import './Dashboard.css'
import React from 'react'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import AttendanceSlider from '../../components/AttendanceSlider/AttendanceSlider'
import AttendanceItems from '../../components/AttendanceItems/AttendanceItems'


function Dashboard() {
  return (
    <div className='dashBoard'>
      <DashboardHeader/>
        <div className="dashboardContainer">
            <AttendanceSlider />
            <AttendanceItems/>
        </div>
    </div>
  )
}

export default Dashboard

