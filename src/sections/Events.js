import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const GOOGLE_SHEETS_API_KEY = process.env.REACT_APP_AUTH_TOKEN
const PAST_EVENTS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/values/past_events?alt=json&key=${GOOGLE_SHEETS_API_KEY}`
const UPCOMING_EVENTS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/values/upcoming_events?alt=json&key=${GOOGLE_SHEETS_API_KEY}`

function eventParser(events) {
  var i
  var new_events = []

  for (i = 0; i < events.length; i++) {
    var curr_event = {}

    curr_event['title'] = events[i][0]
    curr_event['date'] = events[i][1]
    curr_event['description'] = events[i][2]
    curr_event['fb_url'] = events[i][3]
    curr_event['image'] = events[i][4]

    new_events.push(curr_event)
  }
  new_events.shift()
  return new_events
}

class Events extends Component {
  state = {
    past_events: [],
    upcoming_events: [],
  }

  componentDidMount() {
    fetch(PAST_EVENTS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => eventParser(data.values))
      .then((data) => {
        data.reverse()
        this.setState({ past_events: data })
      })
      .catch(console.log)

    fetch(UPCOMING_EVENTS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => eventParser(data.values))
      .then((data) => {
        this.setState({ upcoming_events: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className='events section' id='events'>
        <h1>Upcoming Events</h1>
        <EventCollection
          data={this.state.upcoming_events}
          images={this.props.images}
          direction='ltr'
        />
        <h1>Past Events</h1>
        <EventCollection
          data={this.state.past_events}
          images={this.props.images}
          direction='rtl'
        />
      </div>
    )
  }
}

class EventCollection extends Component {
  state = {
    showModal: false,
    dataModal: {
      name: '',
    },
  }
  getModal = (data) => {
    this.setState({ showModal: true, dataModal: data })
  }
  hideModal = () => {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <div className='card-holder' style={{ direction: this.props.direction }}>
        {this.props.data.map((data, key) => (
          <div key={key} className='small'>
            <div className='card' onClick={() => this.getModal(data)}>
              <img className='card-img' src={data.image} alt=''></img>
              <h4>{data.title}</h4>
              <h5>{data.date}</h5>
            </div>
          </div>
        ))}
        <EventCard
          show={this.state.showModal}
          onHide={this.hideModal}
          dataModal={this.state.dataModal}
        />
      </div>
    )
  }
}

class EventCard extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          {this.props.show && (
            <div className='modal'>
              <div className='modal-main fade-in'>
                <div className='modal-content'>
                  <div className='modal-text'>
                    <h2 className='event-name'>{this.props.dataModal.title}</h2>
                    <p className='event-date'>{this.props.dataModal.date}</p>
                    <p>{this.props.dataModal.description}</p>
                  </div>
                  <div className='modal-img'>
                    <img src={this.props.dataModal.image} alt=''></img>
                  </div>
                </div>
                <div className='close-btn-wrapper'>
                  <button className='close-btn' onClick={this.props.onHide}>
                    Close
                  </button>
                  {this.props.dataModal.fb_url && (
                    <a
                      href={this.props.dataModal.fb_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div id='facebook'>
                        <FontAwesomeIcon icon={faFacebook} />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      </div>
    )
  }
}

export default Events
