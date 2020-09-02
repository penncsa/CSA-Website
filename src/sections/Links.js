import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";

const LINK_ENDPOINT = "https://spreadsheets.google.com/feeds/cells/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/4/public/full?alt=json"


function linkParser(cells){
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
      curr_event['display'] = current_val
    } else if (current_col == 2) {
      curr_event['url'] = current_val
    } 

    if (i == cells.length - 1){ 
      new_events.push(curr_event)
    }
  }
  new_events.shift()
  return new_events
}
  
class Links extends Component{
  state = {
    links : []
  };

  componentDidMount() {
    fetch( LINK_ENDPOINT )
    .then(res => res.json())
    .then(data => linkParser(data.feed.entry))
    .then((data) => {
      this.setState({ links: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        {
          this.state.links.length > 0 && 
          <>
            <h2 style={{margin : "10px"}}>Important Links</h2>
            <LinkCollection data={this.state.links}/> 
          </>
        }
      </div>
    );
  }
}

class LinkCollection extends Component {
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
      <div className="links">      
        {this.props.data.map((data, key) => (<div key={key}>
          <a className="navbtn" href={data.url} target="_blank">{data.display}</a>
        </div>))}
      </div>
    );
  };
}

export default Links; 



