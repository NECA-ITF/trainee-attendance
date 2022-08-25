import React from 'react'
import './HomePage.css'
import itfLogo from "../../assets/images/log.png"
import CustomButton from '../../components/customButton/CustomButton'
import { Link } from 'react-router-dom';

function HomePage() {


  return (
    <div className='bighome'>

         <div className='smallhome'>
            
               <div className='imgdiv'><img src={itfLogo} alt='logo'/></div>
                  <div className='itfdiv'><h1>ITFAS</h1></div>
                  <div className='asdiv'><h2>Simple Easy to use ITF Attendance software</h2></div>
                  <Link to="/login" className="links">
                    <div className='logdiv'>
                     <CustomButton className="login" title= "Log In" backgroundColor={"transparent"} borderRadius={20} width={350} height={80} fontSize={26} onClick={()=> console.log("clicked")}/>
                    </div>
                  </Link>
            


         </div>

    </div>
  )
}



export default HomePage
