import React, { Component } from 'react';
import { Link } from "react-scroll";

import CSA_logo from "../images/logo.png"

class NavBar extends Component{
  render() {
    return (
      <div className="navbar">
        <img id="logo" className="slide-in" src={CSA_logo} alt="csa_logo"></img>
        <div className="slide-in">
            <NavBtn text="Home" destination="home"/>
            <NavBtn text="Events" destination="events"/>
            <NavBtn text="Family Groups" destination="fg"/>
            <NavBtn text="Board" destination="board"/>
        </div>
      </div>
    );
  }
}

class NavBtn extends Component {
  render() {
    return (
      <Link className="navbtn"
            activeClass="active"
            to={this.props.destination}
            spy={true}
            smooth={true}
            duration={500}>
        {this.props.text}
      </Link>
    );
  }
}


export default NavBar;