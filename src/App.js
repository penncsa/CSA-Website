import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PennCSA from "./images/penncsa.png";
import CSA from "./images/csa.png"
import CSA_logo from "./images/logo.png"

import WelcomeWeek from "./images/welcomeweek.png";
import FG from "./images/fgpic.png";

import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";

import Events_Card from './Events_Card';
import ProfileCarousel from "./ProfileCarousel.js"

// Load all images in './img/profiles' folder
function importAll(r) {
  return r.keys().map(r);
}
const about_images = importAll(require.context('./images/about', false, /\.(png|jpe?g|svg|JPG)$/));

const PAST_EVENTS_ENDPOINT = "https://spreadsheets.google.com/feeds/cells/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/1/public/full?alt=json"
const UPCOMING_EVENTS_ENDPOINT = "https://spreadsheets.google.com/feeds/cells/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/2/public/full?alt=json"
const BOARD_BIOS_ENDPOINT = "https://spreadsheets.google.com/feeds/cells/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/3/public/full?alt=json"

class App extends Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <div className="App">
            <img id="logo" src={CSA_logo}></img>
            <NavBar />
            <Home />
            <Events />
            <FamilyGroups />
            <Board/>
            <Footer />
          </div>
        </body>
      </html>
    );
  }
}

class NavBar extends Component{
  render() {
    return (
      <div className="navbar">
        <NavBtn text="Home" destination="home"/>
        <NavBtn text="Events" destination="events"/>
        <NavBtn text="Family Groups" destination="fg"/>
        <NavBtn text="Board" destination="board"/>
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

class Home extends Component{
  render() {
    return (
      <div className="home section" id="home">
        {/* <img id="csa" src={CSA}></img> */}
        <div id="csa" className="fade-in-slow">
          <ProfileCarousel images={about_images} />
        </div>
        {/* <h2>Welcome to</h2>
        <img id="penn-csa" src={PennCSA}></img> */}
        <h4>Welcome to</h4>
        <h1>Penn CSA</h1>
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
        <div id="csa-mobile">
          <ProfileCarousel images={about_images} />
        </div>
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
      </div>
    );
  }
}



class Events extends Component{
  
  state = {
    past_events : [],
    upcoming_events : []
  };

  

  componentDidMount() {
    fetch( PAST_EVENTS_ENDPOINT ) // 'http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => eventParser(data.feed.entry))
    .then((data) => {
      this.setState({ past_events: data })
    })
    .catch(console.log)
  }

  
  
  render() {
    return (
      <div className="events section" id="events">
        {/* <h1>Up Coming</h1>
        <Events_Card events={this.state.upcoming_events} /> */}
        <h1>Past Events</h1>
          {/* <Events_Card events={this.state.past_events} /> */}
          <EventCards data={this.state.past_events} />
      </div>
    );
  }
}

class EventCards extends Component {
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
          <div className="card"  onClick={() => this.getModal(data)}>
            <img className="card-img" src={data.image}></img>
            {/* <div className="card-img"> 
                                  <ProfileCarousel images={about_images} />
            </div> */}
            <h4>{data.title}</h4>
            <h5>{data.date}</h5>
            {/* <button className="bio-btn">About {data.name}</button> */}
          </div>
        </div>))}
        <Event
          show={this.state.showModal}
          onHide={this.hideModal}
          dataModal={this.state.dataModal}
        />
      </div>
    );
  };
}

class Event extends Component {
  render() {
      return (
     <div className="bio">
        <React.Fragment>
        {this.props.show && (
          <div className="modal">
              <div className="modal-main fade-in">
                <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                  <div className="modal-text" style ={{minWidth:'200px', width:'50%', paddingRight:'5px'}}>
                    <h2>{this.props.dataModal.title}</h2>
                    <p>{this.props.dataModal.date}</p>
                    <p>{this.props.dataModal.description}</p>
                  </div>
                  <div  className="modal-img" >
                    <img src={this.props.dataModal.image}></img>
                    {/* <ProfileCarousel images={about_images} /> */}
                  </div>
                </div>
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

class Board extends Component{

  state = {
    bios : []
  };

  componentDidMount() {
    fetch( BOARD_BIOS_ENDPOINT )
    .then(res => res.json())
    .then(data => bioParser(data.feed.entry))
    .then((data) => {
      this.setState({ bios: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="board section" id="board">
        <h1>Board</h1>
        <p>Meet board #114! Click on our cards to learn more about us.</p>
        <div className="board-bios">
          <BoardCards data={this.state.bios} />
        </div>

        {/* <div id="coffee-chat">
          <p>Want to learn more about joining board?</p>
          <p><u>Reach out for a coffee chat</u>.</p>
        </div> */}
        
      </div>
    );
  }
}

class BoardCards extends Component {
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
          <div className="card"  onClick={() => this.getModal(data)}>
            <img className="card-img" src={data.profile}></img>
            <h4>{data.name}</h4>
            <h5>{data.position}</h5>
            {/* <button className="bio-btn">About {data.name}</button> */}
          </div>
        </div>))}
        <Bio
          show={this.state.showModal}
          onHide={this.hideModal}
          dataModal={this.state.dataModal}
        />
      </div>
    );
  };
}

class Bio extends Component {
  render() {
      return (
     <div className="bio">
        <React.Fragment>
        {this.props.show && (
          <div className="modal">
              <div className="modal-main fade-in">
                <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                  <div className="modal-text" style ={{minWidth:'200px', width:'50%', paddingRight:'5px'}}>
                    <h2>{this.props.dataModal.name}</h2>
                    <p><b>Email:</b> {this.props.dataModal.email}</p>
                    <p><b>School:</b> {this.props.dataModal.school} {this.props.dataModal.grad_year}</p>
                    <p><b>Commitments/Clubs:</b> {this.props.dataModal.commitments}</p>
                    <p><b>Hobbies:</b> {this.props.dataModal.hobbies}</p>
                  </div>
                  <div  className="modal-img" >
                    <img src={this.props.dataModal.profile}></img>
                    {/* <ProfileCarousel images={about_images} /> */}
                  </div>
                </div>
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

class FamilyGroups extends Component{
  render() {
    return (
      <div className="fg section" id="fg">  
        <h1>Family Groups</h1>
          
        {/* <div id="fg-wrapper">
        <div id="fg-card-wrapper"> */}
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
        {/* </div> */}

          {/* <div>
          <Form />
          </div> */}

        {/* </div> */}
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
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

class Form extends Component{
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



function eventParser(cells){
  var i;
  var new_events = []
  var curr_event = {}
  var last_row = 1
  for (i = 0; i < cells.length; i++) {
    var current_row = cells[i].gs$cell.row
    var current_col = cells[i].gs$cell.col 
    var current_val = cells[i].gs$cell.inputValue
    if (current_row != last_row) { 
      // new event 
      new_events.push(curr_event)
      curr_event = {}
      last_row = current_row
    }
    // depending on col, set the key of the column
    if (current_col == 1) { 
      curr_event['title'] = current_val
    } else if (current_col == 2) {
      curr_event['date'] = current_val
    } else if (current_col == 3) {
      curr_event['description'] = current_val
    } else if (current_col == 4) { 
      curr_event['image'] = current_val
    }

    if (i == cells.length - 1){ 
      new_events.push(curr_event)
    }
  }
  new_events.shift()
  return new_events
}

function bioParser(cells){
  var i;
  var new_events = []
  var curr_event = {}
  var last_row = 1
  for (i = 0; i < cells.length; i++) {
    var current_row = cells[i].gs$cell.row
    var current_col = cells[i].gs$cell.col 
    var current_val = cells[i].gs$cell.inputValue
    if (current_row != last_row) { 
      // new event 
      new_events.push(curr_event)
      curr_event = {}
      last_row = current_row
    }
    // depending on col, set the key of the column
    if (current_col == 1) { 
      curr_event['email'] = current_val
    } else if (current_col == 2) {
      curr_event['name'] = current_val
    } else if (current_col == 3) {
      curr_event['grad_year'] = current_val
    } else if (current_col == 4) { 
      curr_event['school'] = current_val
    } else if (current_col == 5) { 
      curr_event['majors'] = current_val
    } else if (current_col == 6) { 
      curr_event['commitments'] = current_val
    } else if (current_col == 7) { 
      curr_event['hobbies'] = current_val
    } else if (current_col == 8) { 
      curr_event['position'] = current_val
    } else if (current_col == 9) { 
      curr_event['profile'] = current_val
    } 

    if (i == cells.length - 1){ 
      new_events.push(curr_event)
    }
  }
  new_events.shift()
  return new_events
}