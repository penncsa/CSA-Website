import React, { Component } from 'react';
import BigLittleImage from "../images/big_little.png";

class BigLittle extends Component{
    render() {
      return (
        <div className="fg section" id="biglittle">  
          <h1>CSA's Big Little Program</h1>
            <p id="fg-summary">Are you an underclassman hoping to meet some upperclassmen?
             Or are you an upperclassmen wishing to mentor some underclassmen? If you answered
              yes to either of these questions, then CSA's Big Little program is for you!
              CSA will pair you with a Big/Little based on your interests and major and host
              some fun events throughout the semester for you to get to know each other!
            </p>
            <br></br>
            <p>Check back here or on our socials for the sign-up link soon!</p>
            <img id="fg-pic" src={BigLittleImage} alt="big_little_image"></img>
        </div>
      );
    }
  }

export default BigLittle;
