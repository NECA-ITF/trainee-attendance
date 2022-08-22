import './Dashboard.css'
import React from 'react'
import AttendanceSlider from './AttendanceSlider'
import AttendanceItems from './AttendanceItems'

function Dashboard() {
  return (
    <div>
        {/* ebenizer */}
        {/* abdulwasiu */}
        <div className="dashboardContainer">
            <AttendanceSlider />
            <AttendanceItems/>
        </div>
    </div>
  )
}

export default Dashboard;