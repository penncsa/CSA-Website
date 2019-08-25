import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PennCSA from "./images/penncsa.png";
import BoardImg from "./images/board.png";
import Logo from "./images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook,  } from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div className="App">

            <NavBar />
            <Home />
            <Events />
            <Board />
            <FamilyGroups />
            <Merch />
            <Footer />

          </div>
        </body>
      </html>
    );
  }
}

class NavBar extends React.Component{
  render() {
    return (
      <div className="navbar">
        <NavBtn text="Home" destination="home" />
        <NavBtn text="Events" destination="events" />
        <NavBtn text="Board" destination="board" />
        <NavBtn text="Family Groups" destination="fg" />
        <NavBtn text="Merch" destination="merch" />
      </div>
    );
  }
}

class NavBtn extends React.Component {
  render() {
    return (
      <Link className="navbtn"
      activeClass="active"
      to={this.props.destination}
      spy={true}
      smooth={true}
      duration={500}
    >{this.props.text}</Link>
    );
  }
}

class Home extends React.Component{
  render() {
    return (
      <div className="home-section" id="home">
        <h2>Welcome to</h2>
        <img id="penn-csa" src={PennCSA}></img>
        <p className="mission">The Chinese Students' Association (CSA) is a <b>social, cultural,
           and political organization</b> that aims to promote Chinese and 
           Chinese-American affairs to the Penn community.</p>
           
           <p className="mission">CSA exists to 
           create a network of individuals interested in these affairs and 
           provide a way for <b>all people</b> to learn more about Chinese and 
           Chinese-American culture, history, food, and news while creating a 
           network with a multifaceted family of members.</p>
           
           <p className="mission">
           To carry out our 
           mission, CSA holds numerous events including our annual cultural 
           show production, holiday festivals, speaker events, food events, 
           trips, study breaks, and more.  </p>

           <button id="listserv-btn">Join Our Mailing List</button>
           <FontAwesomeIcon id="instagram" icon={faInstagram} href = 'https://www.instagram.com/upenncsa/'/>
           <FontAwesomeIcon id="facebook" icon={faFacebook} href = 'https://www.facebook.com/penn.csa/'/>

           <div class="container">
             <div class="chevron"></div>
             <div class="chevron"></div>
             <div class="chevron"></div>
           </div>
      </div>
    );
  }
}

class Events extends React.Component{
  render() {
    return (
      <div className="events-section" id="events">
        <h1>Events</h1>
      </div>
    );
  }
}

class Board extends React.Component{
  render() {
    return (
      <div className="board-section" id="board">
        <h2>Meet the CSA</h2>
        <img id="board-title" src={BoardImg}></img>
        <div className="board-bios">
          <Card img={Logo} name="Kristie Hong" position="President" bio="Insert Bio" />
          <Card img={Logo} name="Samuel Xu" position="Vice President" bio="Insert Bio" />
          <Card img={Logo} name="Howard Li" position="Vice President" bio="Insert Bio" />
          <Card img={Logo} name="Angela Yang" position="Vice President (Abroad)" bio="Insert Bio" />
          <Card img={Logo} name="Emily Chen" position="Member Relations Chair" bio="Insert Bio" />
          <Card img={Logo} name="Ryan Le" position="Member Relations Chair" bio="Insert Bio" />
          <Card img={Logo} name="Mindy Wang" position="Internal Chair" bio="Insert Bio" />
          <Card img={Logo} name="Brian Zhang" position="Internal Chair" bio="Insert Bio" />
          <Card img={Logo} name="Clio Sun" position="External Chair" bio="Insert Bio" />
          <Card img={Logo} name="Jashee Yang" position="External Chair" bio="Insert Bio" />
          <Card img={Logo} name="Vivian Luong" position="Cultural Chair" bio="Insert Bio" />
          <Card img={Logo} name="Lark Yan" position="Cultural Chair" bio="Insert Bio" />
          <Card img={Logo} name="Linda Wang" position="Special Events Chair" bio="Insert Bio" />
          <Card img={Logo} name="Tippy Pei" position="Special Events Chair" bio="Insert Bio" />
          <Card img={Logo} name="Christina Lu" position="Design Chair" bio="Insert Bio" />
        </div>
        <p>Want to learn more about joining board? Reach out for a coffee chat.</p>
      </div>
    );
  }
}

class Card extends React.Component{
  render() {
    return (
      <div className="card">
        <img className="card-img" src={this.props.img}></img>
        <h3>{this.props.name}</h3>
        <h4>{this.props.position}</h4>
        <p className="board-bio">{this.props.bio}</p>
      </div>
    );
  }
}

class FamilyGroups extends React.Component{
  render() {
    return (
      <div className="fg-section" id="fg">
        <h1>Family Groups</h1>

        <p>CSA Family Group Sign Up</p>
        <Form />
      </div>
    );
  }
}

class Merch extends React.Component{
  render() {
    return (
      <div className="merch-section" id="merch">
        <h1>Merch</h1>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-section">
        <p>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        </p>
      </div>
    );
  }
}

class Form extends React.Component{
  state = {
    name: '',
    email: '',
    hometown: '',
    preference: '',
    bigLittle: '',
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input 
          name="name"
          placeholder="Name"
          autoComplete="off" 
          value = {this.state.name} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="email"
          placeholder="Email"
          autoComplete="off"  
          value = {this.state.email} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="hometown"
          placeholder="Hometown"
          autoComplete="off"  
          value = {this.state.hometown} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="preference"
          placeholder="Preference"
          autoComplete="off"  
          value = {this.state.preference} 
          onChange={e => this.change(e)}
        />
        <br />
        <input 
          name="bigLittle"
          placeholder="Big / Little"
          autoComplete="off"  
          value = {this.state.bigLittle} 
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}
export default App; 
