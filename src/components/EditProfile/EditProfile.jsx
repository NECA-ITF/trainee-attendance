import React from 'react'
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../customButton/CustomButton'
import Header from '../DashboardHeader/DashboardHeader'
// import { MdDashboard } from "react-icons/md";
import DashboardIcon from '../DashboardIcon/DashboardIcon'
import './EditProfile.css'
import {Link} from 'react-router-dom';
function EditProfile() {
  return (
    <div className="contEdit">
        <Header dash = {<Link to="/dashboard" className="links"><DashboardIcon /></Link>}/>
        <div className='econt'>
            <div className="econtent"><br />
                <h2>New Profile Information</h2>
                <h4>Name</h4>
                <div className="custinput">
                    <CustomInput style={{border: '.6px solid black', width: '85%', height:'5px'}}/>
                </div>
                <h4>Email</h4>
                <div className="custinput">
                    <CustomInput style={{border: '.6px solid black', width: '85%', height:'5px'}}/>
                </div>
                <h4>Password</h4>
                <div className="custinput">
                    <CustomInput style={{border: '.6px solid black', width: '85%', height:'5px'}} type = 'password'/>
                </div>
                <h4>Confirm Password</h4>
                <div className="custinput">
                    <CustomInput style={{border: '.6px solid black', width: '85%', height:'5px'}} type = 'password'/>
                </div>
                <Link to="/profile" className="links">
                    <div className="custbtn">
                        <CustomButton title = 'Confirm Changes' style={{width: '65%', fontSize:'1.09rem', fontWeight: 'bold', boxShadow: 'none', borderRadius: '15px'}}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default EditProfile