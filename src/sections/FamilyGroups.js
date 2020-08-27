import React, { Component } from 'react';
import FG from "../images/fgpic.png";

class FamilyGroups extends Component{
    render() {
      return (
        <div className="fg section" id="fg">  
          <h1>Family Groups</h1>
            <p id="fg-summary">Family groups are the Hogwarts houses of CSA, each comprised
              of members with similar interests and headed by 3 to 4 CSA board members.
              They are a great way to get to know more
                people, form a small circle of close-knit friends, and become a mentor/mentee to a big/little.
            </p>
            <br></br>
            <p>If you're interested in joining, <a href="https://docs.google.com/forms/d/e/1FAIpQLSeah440MJ1Q8pYqVVkCZsRO1jFxU3YChap263A5JO64iUWWCw/viewform">sign up here!</a></p> 
            <div className="fg-card">
              <p>Balling Baozi</p>
            </div>
            <div className="fg-card">
              <p>Bubbly Bobas</p>
            </div>
            <div className="fg-card">
              <p>Destiny's Dumplings</p>
            </div>
            <div className="fg-card">
              <p>Sassy Springrolls</p>
            </div>
  
            <img id="fg-pic" src={FG} alt="fg_img"></img>
        </div>
      );
    }
  }

export default FamilyGroups;