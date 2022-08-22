import './Dashboard.css'
import React from 'react'
import AttendanceSlider from './AttendanceSlider'
import AttendanceItem from './AttendanceItem'

function Dashboard() {
  return (
    <div>
        {/* ebenizer */}
        {/* abdulwasiu */}
        <div className="dashboardContainer">
            <AttendanceItem />
            <AttendanceSlider />
        </div>
    </div>
  )
}

export default Dashboard