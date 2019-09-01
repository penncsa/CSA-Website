import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PennCSA from "./images/penncsa.png";
import CSA from "./images/csa.png"
import BoardImg from "./images/board.png";
import EventsImg from "./images/events.png";
import FGImg from "./images/familygroups.png";

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

  state = {
    post: [
      { id: 1, name: "Kristie", lastname: "Hong", position: "President", img: Kristie, bio: "Born and raised in Basking Ridge, New Jersey, Kristie is a senior studying Finance and Accounting in The Wharton School. In her free time, she loves playing board games and card games (hit her up for Avalon!), binge watching Reality TV (She is a HUGE Survivor fan and tried applying for the show), going to day spas and getting massages, and sleeping through the day. Joining CSA has been her best decision at Penn, and she hopes you will find your home away from home with CSA too."},
      { id: 2, name: "Sammy", lastname: "Xu", position: "Vice President", img: Sammy, bio: "Sammy is a junior studying Computer Science and OIDD. He was born in Virginia and has also spent time in Ohio, Texas, Hong Kong, and Shanghai. He has been a fan of the Houston Rockets since the days of McGrady/Yao, and loves playing basketball in his free time (let him know if you want to join the unofficial CSA basketball chat!). He also really likes monitors."},
      { id: 3, name: "Howard", lastname: "Li", position: "Vice President", img: Howard, bio: "Howard is a junior from the great state of Michigan studying BBB. Outside of CSA, he is also involved in MERT as well as research. In his free time, he enjoys playing basketball, going on runs/walks through the city, and spending time with family and friends."},
      { id: 4, name: "Angela", lastname: "Yang", position: "Vice President (Abroad)", img: Angela, bio: "Angela is a junior in the College studying International Relations. She is from Los Angeles, Beijing, and Chicago. Outside of CSA, she is also involved with PAGE and IAA. Her interests include adventuring/exploring and eating new foods, deep convos, and cooking or baking."},
      { id: 5, name: "Emily", lastname: "Chen", position: "Member Relations Chair", img: Emily, bio: "Emily is a senior in the College studying Biology, Chemistry, and East Asian Language and Civilizations. She is aspiring to be a physician and spent her past summer volunteering in the Emergency Department and studying for the MCAT. She loves to travel to new places and make videos about her adventures! Her most recent trip was a spontaneous week in Beijing and Wuhan, China."},
      { id: 6, name: "Ryan", lastname: "Le", position: "Member Relations Chair", img: Ryan, bio: "Ryan is a sophomore who is still figuring out what he wants to study. He enjoys biking, swimming, going to cultural events, and sneakers! Catch him taking naps in between classes at PAACH."},
      { id: 7, name: "Mindy", lastname: "Wang", position: "Internal Chair", img: Mindy, bio: "Mindy is a senior studying Finance and OIDD. She grew up in Philly, and her hobbies include playing badminton and religiously watching mukbangs at 3AM. Fun fact: she was at LAX the same time as Seventeen and Monsta X."},
      { id: 8, name: "Brian", lastname: "Zhang", position: "Internal Chair", img: Brian, bio: "Brian is a sophomore studying mechanical engineering. He really enjoys cooking (not great, but good enough to survive), working out, and simply having some fun. He is from Long Island, New York and strongly believes New York > Pennsylvania."},
      { id: 9, name: "Clio", lastname: "Sun", position: "External Chair", img: Clio, bio: "From Houston, Texas (yeehaw), Clio is currently a junior at Wharton studying Business Analytics and Marketing. On campus she is involved in CSA, Wharton Cohorts, and 180 Degrees Consulting. She loves trying new things to cook and has watched way too many TV shows (top faves include the Office, Psych, and the Mentalist)."},
      { id: 10, name: "Jashee", lastname: "Yang", position: "External Chair", img: Jashee, bio: "Jashee is a sophomore from Sunnyvale, California studying International Relations in the College. Outside of CSA, she is involved with aKDPhi and APAHW. She likes to listen to music, watches a lot of YouTube, and also used to competitively waterski!"},
      { id: 11, name: "Vivian", lastname: "Luong", position: "Cultural Chair", img: Vivian, bio: "Vivian is a junior from San Jose, California double-majoring in Nursing and Nutrition. At any moment, you can find her performing (singing, acting, dancing), cooking, exploring, and engaging in deep conversations about topics ranging from culture to sex and gender. She’s currently an RA in Fisher Hassenfeld, and is involved in Penn Sirens, APANSA, VSA, and PPA."},
      { id: 12, name: "Lark", lastname: "Yan", position: "Cultural Chair", img: Lark, bio: "Lark is a sophomore in the College and is the Cultural Chair of CSA. She comes from the wonderful cornfields of Ohio (go Bucks!) and enjoys traveling. Catch her getting boba or watching Brooklyn 99 in her free time."},
      { id: 13, name: "Linda", lastname: "Wang", position: "Special Events Chair", img: Linda, bio: "Linda is a sophomore in the College of Arts & Sciences and is majoring in Mathematical Economics. Her on-campus involvements include Sigma Psi Zeta Sorority, Student Federal Credit Union, and Korean Students Association. If you see her on Locust Walk, she is likely listening to a podcast because she cannot fathom a single second just alone with her own mind."},
      { id: 14, name: "Thomas", lastname: "Pei", position: "Special Events Chair", img: Tippy, bio: "Thomas is a sophomore in the College studying mathematics and economics. He enjoys playing ultimate frisbee, watching Chinese rom-coms/Running Man, and constantly eating (“bulking”). Passionate, spontaneous, and bubbly, Thomas is the type of person who would run from campus to Penn’s Landing (he didn’t understand miles on Google Maps), only to find out that his other friends got there by subway."},
      { id: 15, name: "Christina", lastname: "Lu", position: "Design Chair", img: Christina, bio: "Christina is a sophomore from Plano, TX studying Business and Computer Science. On campus, outside of CSA, she is involved with Wharton Undergraduate Consulting Club and TEDxPenn. She enjoys painting, writing, gaming, and rock climbing. She is also a big fan of dance crews and competitive figure skating."},
    ]
  };
  
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <div className="App">
            <NavBar />
            <Home />
            <Events />
            <Board data={this.state.post}/>
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
        <NavBtn text="Home" destination="home"/>
        <NavBtn text="Events" destination="events"/>
        <NavBtn text="Board" destination="board"/>
        <NavBtn text="Family Groups" destination="fg"/>
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
            duration={500}>
        {this.props.text}
      </Link>
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
           Chinese-American affairs to the Penn community.
        </p>
        <p className="mission">CSA exists to 
           create a network of individuals interested in these affairs and 
           provide a way for <b>all people</b> to learn more about Chinese and 
           Chinese-American culture, history, food, and news while creating a 
           network with a multifaceted family of members.
        </p>
        <p className="mission">
           To carry out our 
           mission, CSA holds numerous events including our annual cultural 
           show production, holiday festivals, speaker events, food events, 
           trips, study breaks, and more.  
        </p>
        <img id="csa-mobile" src={CSA}></img>
        <div className="connect">
          <a href="http://eepurl.com/tX5_j" target="_blank">
            <button id="listserv-btn">Join Our Mailing List</button>
          </a>
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
          <Card img={Kristie} firstname="Kristie" lastname="Hong" position="President" data={this.props.data} />
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

class Card extends React.Component {
  state={
    showModal: false,
    dataModal: {
      name: ""
    }
  } 
  getModal = data => {
    this.setState({showModal: true, dataModal: data});
  }
 hideModal = () => {
    this.setState({showModal: false});
  }
  render() {
    return( 
      <div>      
        {this.props.data.map((data, key) => (<div key={key} className="small">
          <div className="card">
            <img className="card-img" src={data.img}></img>
            <h4>{data.name} {data.lastname}</h4>
            <h5>{data.position}</h5>
            <button className="bio-btn" onClick={() => this.getModal(data)}>About {data.name}</button>
      </div>
        </div>))}
        <Bio
          show={this.state.showModal}
          onHide={this.hideModal}
          name={this.state.dataModal.name}
          lastname={this.state.dataModal.lastname}
          bio={this.state.dataModal.bio}
        />
      </div>
    );
  };
}

class Bio extends React.Component {
  render() {
      return (
     <div className="bio">
        <React.Fragment>
        {this.props.show && (
          <div className="modal">
          <div className="modal-main">
            <h2>{this.props.name} {this.props.lastname}</h2>
            <p>{this.props.bio}</p>
            <div className="close-btn-wrapper">
              <button className="close-btn" onClick={this.props.onHide}>
                 Close
              </button>
            </div>
          </div>
          </div>
        )}
      </React.Fragment>
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
        <p id="fg-summary">Family groups are the Hogwarts houses of CSA, each comprised
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

        <div>
        <Form />
        </div>

      </div>
      </div>
    );
  }
}

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
      
      <div className="form-wrapper">
      <div className="form">
        <h3>Sign Up to Join a Family Group</h3>
      <form method="POST" action="https://formspree.io/penncsaboard@gmail.com">
        <p>Name</p>
        <input 
          name="name"
          type="name"
          autoComplete="off" 
          value = {this.state.name} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Email Address</p>
        <input 
          name="email"
          type="email"
          autoComplete="off"  
          value = {this.state.email} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Hometown</p>
        <input 
          name="hometown"
          type="hometown"
          autoComplete="off"  
          value = {this.state.hometown} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Do you have a preferred family group?</p>
        <input 
          name="preference"
          type="preference"
          autoComplete="off"  
          value = {this.state.preference} 
          onChange={e => this.change(e)}
        />
        <br />
        <p>Would you like to be paired with a big or little?</p>
        <input 
          name="bigLittle"
          type="bigLittle"
          autoComplete="off"  
          value = {this.state.bigLittle} 
          onChange={e => this.change(e)}
        />
        <br />
        <button type="submit" value="Send" id="fg-btn" onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
      </div>
    )
  }
}
export default App; 
