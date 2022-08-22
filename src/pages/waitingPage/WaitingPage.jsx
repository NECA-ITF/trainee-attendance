import React from 'react'
import log from '../../assets/waitingPage/log.png'
import './WaitingPage.css'
import sidepic from '../../assets/waitingPage/pic.gif'
import CustomButton from '../../components/customButton/CustomButton'

function WaitingPage() {
  return (
    <div className='waiting-page'>
      <div className='waiting-head'>
        <img src={log} alt="log"/>
      </div>
        <div  className='waiting-flex'>
            <div className='waiting-text'>
                <h2>
                You have completed the first step of your registration go to the admin to complete your registration process, then click on login
                </h2>
                <div className="waiting-button">
                    <CustomButton title='Login' borderRadius={0} width={250} fontSize={20}/>
                </div>
                
            </div>
            <div className='side-img'>
                <img src={sidepic} alt="sidepic" />
            </div>
            
        </div>
    </div>
  )
}

export default WaitingPage
