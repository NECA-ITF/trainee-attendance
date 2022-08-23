import React from 'react'
import './DashboardHeader.css'
import itf_logo from '../../assets/images/itf-logo.jpg'
import logout from '../../assets/images/logout-32.png'
import search from '../../assets/images/Search Icon.png'
import details from '../../assets/images/Screenshot4.png'
function DashboardHeader() {
  return (
    <div className = "header">
        <div className='flex1'>
            <img src={itf_logo} alt="..." width="60px" height="50px"></img>
        </div>
     
        <div className="Search">
            <div className='img2'>
                <img src={search} alt="..." width="20px" height="20px"></img>
            </div>
            <div>
                <input type="text" id="Search1" placeholder="  Search..."></input>
            </div>
        </div>
        <div className="iconright">
            <div id='alignSelf'>
                <span href='#body'>
                    <img src={logout} alt="..." width='40px'></img>
                </span>

                <span href='#body'>
                    <img src={details} alt="..." width="40px" height="40px"></img>
                </span>
            </div>
                
        </div>
 </div>
  )
}

export default DashboardHeader