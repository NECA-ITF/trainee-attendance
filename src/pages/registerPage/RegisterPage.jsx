import React, { useState } from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import './RegisterPage.css';
function RegisterPage() {
  return (
    <div><br /><br /><br /><br /><br />
      <CustomButton title= "Register" onClick={()=> console.log("clicked")} />
      <CustomInput placeholder="Email" width={200} height={10} borderRadius={50} />
    </div>
  );
}

export default RegisterPage;