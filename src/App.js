import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PennCSA from "./images/penncsa.png";
import CSA from "./images/csa.png"
import BoardImg from "./images/board.png";
import EventsImg from "./images/events.png";
import FGImg from "./images/familygroups.png";
import Logo from "./images/logo.svg";
import Angela from "./images/angela.jpg";
import Brian from "./images/brian.jpg";
import Christina from "./images/christina.jpg";
import Clio from "./images/clio.jpg";
import Emily from "./images/emily.jpg";
import Howard from "./images/howard.jpg";
import Jashee from "./images/jashee.jpg";
import Kristie from "./images/kristie.jpg";
import Lark from "./images/lark.jpg";
import Linda from "./images/linda.jpg";
import Mindy from "./images/mindy.jpg";
import Ryan from "./images/ryan.jpg";
import Sammy from "./images/sammy.jpg";
import Tippy from "./images/tippy.jpg";
import Vivian from "./images/vivian.jpg";
import WelcomeWeek from "./images/welcomeweek.png";
import FG from "./images/fgpic.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook,  } from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {

  state={
    show: false
  }
  
  showBio = data => {
    this.setState({show: true, bio: data});
  }

  hideBio = () => {
    this.setState({show: false});
  }
  
  render() {
    return (
      <html>
        <body>
          <div className="App">
            <NavBar />
            <Home />
            <Events />
            <Board show={this.state.show} showBio={this.showBio} hideBio={this.hideBio}/>
            <FamilyGroups />
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

         <img id="csa" src={CSA}></img>

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

           <div className="connect">
             <button id="listserv-btn">Join Our Mailing List</button>
             <a href="https://www.instagram.com/upenncsa/" target="_blank">
               <div id="instagram"><FontAwesomeIcon icon={faInstagram}/></div>
             </a>
             <a href="https://www.facebook.com/penn.csa/" target="_blank">
               <div id="facebook"><FontAwesomeIcon icon={faFacebook} /></div>
             </a>
           </div>

          

           <div className="container">
             <div className="chevron"></div>
             <div className="chevron"></div>
             <div className="chevron"></div>
           </div>
      </div>
    );
  }
}

class Events extends React.Component{
  render() {
    return (
      <div className="events-section" id="events">
        <img id="events-title" src={EventsImg}></img>
        <img id="welcome-week" src={WelcomeWeek}></img>

        <div className="container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    );
  }
}

class Board extends React.Component{
  render() {
    return (
      <div className="board-section" id="board">
        <img id="board-title" src={BoardImg}></img>
        <div className="board-bios">
          <Card img={Kristie} firstname="Kristie" lastname="Hong" position="President" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Sammy} firstname="Samuel" lastname="Xu" position="Vice President" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Howard} firstname="Howard" lastname="Li" position="Vice President" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Angela} firstname="Angela" lastname="Yang" position="Vice President (Abroad)" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Emily} firstname="Emily" lastname="Chen" position="Member Relations Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Ryan} firstname="Ryan" lastname="Le" position="Member Relations Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Mindy} firstname="Mindy" lastname="Wang" position="Internal Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Brian} firstname="Brian" lastname="Zhang" position="Internal Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Clio} firstname="Clio" lastname="Sun" position="External Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Jashee} firstname="Jashee" lastname="Yang" position="External Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Vivian} firstname="Vivian" lastname="Luong" position="Cultural Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Lark} firstname="Lark" lastname="Yan" position="Cultural Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Linda} firstname="Linda" lastname="Wang" position="Special Events Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Tippy} firstname="Thomas" lastname="Pei" position="Special Events Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
          <Card img={Christina} bio="Board bios coming soon!" firstname="Christina" lastname="Lu" position="Design Chair" show={this.props.show} showBio={this.props.showBio} hideBio={this.props.hideBio} />
        </div>

        <div id="coffee-chat">
          <p>Want to learn more about joining board?</p>
          <p><u>Reach out for a coffee chat</u>.</p>
        </div>

        <div className="container">
            <div className="chevron"></div>
             <div className="chevron"></div>
             <div className="chevron"></div>
           </div>
      </div>
    );
  }
}

class Card extends React.Component{
  render() {
    return (
      <div className="card">
        <img className="card-img" src={this.props.img}></img>
        <h4>{this.props.firstname} {this.props.lastname}</h4>
        <h5>{this.props.position}</h5>
        <BioBtn name={this.props.firstname} show={this.props.show} bio={this.props.bio}
          showBio={this.props.showBio} hideBio={this.props.hideBio}
        />
      </div>
    );
  }
}

class BioBtn extends React.Component {
  render() {
    return(
      <div>
      <button className="bio-btn" onClick={this.props.showBio}>About {this.props.name}</button>
      <Bio show={this.props.show} handleClose={this.props.hideBio} bio={this.props.bio}/>
      </div>
    );
  };
}

class Bio extends React.Component {
  render() {
      const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
      return (
        <div className={showHideClassName}>
          <section className="modal-main">
            {this.props.bio}
            <div className="close-btn-wrapper">
              <button className="close-btn" onClick={this.props.handleClose}>Close</button>
            </div>
          </section>
        </div>
      );
    };
  }

class FamilyGroups extends React.Component{
  render() {
    return (
      <div className="fg-section" id="fg">
      <div id="fg-title-wrapper">
        <img id="fg-title" src={FGImg}></img>
      </div>
        
      <div id="fg-wrapper">
      <div id="fg-card-wrapper">
        <p>Family groups are the Hogwarts houses of CSA, each comprised
           of members with similar interests and headed by 3 to 4 CSA board members.
           They are a great way to get to know more
            people, form a small circle of close-knit friends, and become a mentor/mentee to a big/little.
        </p>
        
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



        <img id="fg-pic" src={FG}></img>

        
      </div>

        <div id="fg-sign-up">
        </div>
        <Form />
      </div>
      </div>
    );
  }
}

/*
class Merch extends React.Component{
  render() {
    return (
      <div className="merch-section" id="merch">
        <h1>Merch</h1>
      </div>
    );
  }
}*/

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-section">
        <p id="contact-us">Questions? Contact us at <b>penncsaboard@gmail.com</b></p>
        <p>
        <a href="https://www.instagram.com/upenncsa/" target="_blank">
               <div id="instagram"><FontAwesomeIcon icon={faInstagram}/></div>
             </a>
             <a href="https://www.facebook.com/penn.csa/" target="_blank">
               <div id="facebook"><FontAwesomeIcon icon={faFacebook} /></div>
             </a>
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
      
      <div className="form">
        <h3>Sign Up to Join a Family Group</h3>
      <form>
        <p>Name</p>
        <input 
          name="name"
          autoComplete="off" 
          value = {this.state.name} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Email Address</p>
        <input 
          name="email"
          autoComplete="off"  
          value = {this.state.email} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Hometown</p>
        <input 
          name="hometown"
          autoComplete="off"  
          value = {this.state.hometown} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Do you have a preferred family group?</p>
        <input 
          name="preference"
          autoComplete="off"  
          value = {this.state.preference} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Would you like to be paired with a big or little?</p>
        <input 
          name="bigLittle"
          autoComplete="off"  
          value = {this.state.bigLittle} 
          onChange={e => this.change(e)}
        />
        <br />
        <button id="fg-btn" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
    )
  }
}
export default App; 
