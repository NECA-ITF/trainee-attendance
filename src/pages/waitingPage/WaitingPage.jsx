import React from 'react'
import log from '../../assets/images/log.png'
import './WaitingPage.css'
import sidepic from '../../assets/images/pic.gif'
import CustomButton from '../../components/customButton/CustomButton'
import { Link } from 'react-router-dom';

function WaitingPage() {
  return (
    <div className='waiting-page'>
      <div className='waiting-head'>
        <img src={log} alt="log"/>
      </div>
        <div  className='waiting-flex'>
            <div className='waiting-text'>
                <span>
                You have completed the first step of your registration go to the admin to complete your registration process, then click on login
                </span>
                <Link to="/login" className="links">
                  <div className="waiting-button">
                      <CustomButton title='Login' borderRadius={0} width={250} fontSize={20} backgroundColor= 'lightred' boxShadow='0 6.0339 6.0339 #FFCCCC'/>
                  </div>
                </Link>

                
            </div>
            <div className='side-img'>
                <img src={sidepic} alt="sidepic" />
            </div>
            
        </div>
    </div>
  )
}

export default WaitingPage