import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";

const PAST_EVENTS_ENDPOINT = "https://spreadsheets.google.com/feeds/cells/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/1/public/full?alt=json"
const UPCOMING_EVENTS_ENDPOINT = "https://spreadsheets.google.com/feeds/cells/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/2/public/full?alt=json"


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
      curr_event['fb_url'] = current_val
    } else if (current_col == 5) { 
      curr_event['image'] = current_val
    }

    if (i == cells.length - 1){ 
      new_events.push(curr_event)
    }
  }
  new_events.shift()
  return new_events
}
  
class Events extends Component{
  state = {
    past_events : [],
    upcoming_events : []
  };

  componentDidMount() {
    fetch( PAST_EVENTS_ENDPOINT )
    .then(res => res.json())
    .then(data => eventParser(data.feed.entry))
    .then((data) => {
      data.reverse()
      this.setState({ past_events: data })
    })
    .catch(console.log)

    fetch( UPCOMING_EVENTS_ENDPOINT )
    .then(res => res.json())
    .then(data => eventParser(data.feed.entry))
    .then((data) => {
      this.setState({ upcoming_events: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="events section" id="events">
        <h1>Upcoming Events</h1>
        <EventCollection data={this.state.upcoming_events} images={this.props.images} direction="ltr"/>
        <h1>Past Events</h1>
        <EventCollection data={this.state.past_events} images={this.props.images} direction="rtl"/>
      </div>
    );
  }
}

class EventCollection extends Component {
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
      <div className="card-holder" style={{direction: this.props.direction}}>      
        {this.props.data.map((data, key) => (<div key={key} className="small">
          <div className="card"  onClick={() => this.getModal(data)}>
            <img className="card-img" src={data.image} alt=""></img>
            <h4>{data.title}</h4>
            <h5>{data.date}</h5>
          </div>
        </div>))}
        <EventCard
          show={this.state.showModal}
          onHide={this.hideModal}
          dataModal={this.state.dataModal}
        />
      </div>
    );
  };
}

class EventCard extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          {this.props.show && (
            <div className="modal">
              <div className="modal-main fade-in">
                <div className="modal-content">
                  <div className="modal-text">
                    <h2 className="event-name">{this.props.dataModal.title}</h2>
                    <p className="event-date">{this.props.dataModal.date}</p>
                    <p>{this.props.dataModal.description}</p>
                  </div>
                  <div className="modal-img" >
                    <img src={this.props.dataModal.image} alt=""></img>
                  </div>
                </div>
                <div className="close-btn-wrapper">
                  <button className="close-btn" onClick={this.props.onHide}>
                    Close
                  </button>
                  {this.props.dataModal.fb_url &&
                    <a href={this.props.dataModal.fb_url} target="_blank" rel="noopener noreferrer">
                      <div id="facebook"><FontAwesomeIcon icon={faFacebook} /></div>
                    </a>  
                  } 
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      </div>
    );
  };
}

export default Events; 



