import './Dashboard.css'
import React from 'react'
import DashboardHeader from './DashboardHeader'
import AttendanceSlider from './AttendanceSlider'
import AttendanceItems from './AttendanceItems'


function Dashboard() {
  return (
    <div>
      <DashboardHeader/>
        <div className="dashboardContainer">
            <AttendanceSlider />
            <AttendanceItems/>
        </div>
    </div>
  )
}

export default Dashboard

