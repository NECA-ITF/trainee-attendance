import './Dashboard.css'
import React from 'react'
import DashboardHeader from '../../components/dashBoard/DashboardHeader'
import AttendanceSlider from '../../components/dashBoard/AttendanceSlider'
import AttendanceItems from '../../components/dashBoard/AttendanceItems'


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

