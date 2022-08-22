import React from 'react'
import "./AttendanceItems.css";
import AttendanceItem from './AttendanceItem';
function AttendanceItems() {
  return (
    <div className='attendance'>
      <div className='attendance-heading'>
          <div className='heading'><h4>Your Attendance List</h4></div>
          <div className='attendance-list'>
            <ul>
              <li>Emp No:</li>
              <li>Emp Name:</li>
              <li>Date:</li>
              <li>Login Time:</li>
              <li>Logout Time:</li>
              <li>Details:</li>
            </ul>
          </div>
          <div className="attendance-item">
            <AttendanceItem />
            <AttendanceItem />
            <AttendanceItem />
          </div>
          <div className='attendance-enteries'>
            <div className='enteries'>
              <ul>
              <li>Show</li>
              <li><span>{3}</span></li>
              <li>Enteries</li>
              </ul>
              
            </div>
            <div className='arrow'>
              <ul>
              <li>{'<'}</li>
              <li>{'>'}</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AttendanceItems