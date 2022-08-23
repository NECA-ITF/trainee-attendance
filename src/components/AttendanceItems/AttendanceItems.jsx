import React from 'react'
import "./AttendanceItems.css";
import AttendanceItem from '../AttendanceItem/AttendanceItem';
function AttendanceItems() {
  return (
    <div className='attendance'>
      <div className='attendance-heading'>
          <div className='heading'><h4>Your Attendance List</h4></div>
          <div className='attendance-list'>
            <ul>
              <li className='item'>Emp No:</li>
              <li className='item'>Emp Name:</li>
              <li className='item'>Date:</li>
              <li className='item'>Login Time:</li>
              <li className='item'>Logout Time:</li>
              <li className='item'>Details:</li>
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