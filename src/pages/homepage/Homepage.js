import React from 'react'
import './Homepage.css'
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
                  <Link to="/login">
                    <div className='logdiv'>
                     <CustomButton className="login" title= "Log In" backgroundColor={"transparent"} borderRadius={10} width={300} height={70} fontSize={26} onClick={()=> console.log("clicked")}/>
                    </div>
                  </Link>
            


         </div>

    </div>
  )
}



export default HomePage
