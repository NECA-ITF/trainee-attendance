import React, { Component } from 'react'
import template from '../../../assets/images/template.jpg'
import "./ProfileImage.css"

export default class ProfileImage extends Component {
  render() {
    return (
         <div>
            <div id='Oflex'>
                    <img src={template} alt="Profile" height="200px" width="200px"/>
            </div>
         </div>
    )
  }
}
