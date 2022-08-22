import './Dashboard.css'
import React from 'react'
import AttendanceItem from './AttendanceItem'
import AttendanceSlider from './AttendanceSlider'

function Dashboard() {
  return (
    <div className = 'dashboardContainer'>
      <AttendanceItem />
      <AttendanceSlider />
    </div>
  )
}

export default Dashboard