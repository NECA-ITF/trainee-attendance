import React from 'react';
import './WaitingPage.css';
import itf_log from './itf_log.png';
import CustomButton from '../../components/customButton/CustomButton';


function WaitingPage() {
  return (
    <div className='waiting-parent'>
        <div className='waiting-img'>
            <img src={itf_log} alt="itf logo" />
        </div>
        <div className='waiting-text'>
            <h3>
                You have completed the first step of your registration go 
                to the admin to complete your registration process.
            </h3>
            <div className='waiting'>
                <p>
                    Click here when done with registration
                </p>
                <CustomButton title='login' borderRadius={0}/>
            </div>
        </div>
    </div>
  )
}

export default WaitingPage;