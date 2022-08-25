import React from 'react'
import './DashboardHeader.css'
import itf_logo from '../../assets/images/itf-logo.jpg'
import logout from '../../assets/images/logout-32.png'
import search from '../../assets/images/Search Icon.png'
import details from '../../assets/images/Screenshot4.png'
function DashboardHeader({ dash}) {
  return (
    <div className = "header">
        <div className='flex1'>
            <img src={itf_logo} alt="..." width="50px" height="40px"></img>
        </div>
     
        <div className="Search">
            <div className='img2'>
                <img src={search} alt="..." width="10px" height="10px"></img>
            </div>
            <div>
                <input type="text" id="Search1" placeholder="Search..." ></input>
            </div>
        </div>
        <div className="iconright">
            <div id='alignSelf'>
                <span>
                    <img src={logout} alt="..." width='40px'></img>
                </span>

                <span id='eprofile'>
                    <img src={details} alt="..." width="40px" height="40px"></img>
                </span>
                <span style={{fontSize: "1.9rem", marginRight: '20px'}}>
                    {dash}
                </span>
            </div>
                
        </div>
 </div>
  )
}

export default DashboardHeader