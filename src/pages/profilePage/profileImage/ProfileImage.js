import React, { Component } from 'react'
import template from '../../../images/template.jpg'
import "./ProfileImage.css"

export default class ProfileImage extends Component {
  render() {
    return (
         <div>
            
            <div id='Oflex'>
                    <img src={template} alt="Profile" height="250px" width="250px"/>
            </div>
            <h1 id='Myprofile'> Maryam xxxx</h1>
            <br/><hr/><br/>
         </div>
    )
  }
}
