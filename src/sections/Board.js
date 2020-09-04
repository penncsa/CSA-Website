import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";

const BOARD_BIOS_ENDPOINT = "https://spreadsheets.google.com/feeds/cells/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/3/public/full?alt=json"

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
            curr_event['fb_url'] = current_val
        } else if (current_col == 10) { 
            curr_event['ig_url'] = current_val
        } else if (current_col == 11) { 
            curr_event['profile'] = current_val
        } 
    
        if (i == cells.length - 1){ 
            new_events.push(curr_event)
        }
    }
    new_events.shift()
    return new_events
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
                    <BioCollection data={this.state.bios} />
                </div>
                {/* <div id="coffee-chat">
                    <p>Want to learn more about joining board?</p>
                    <p><u>Reach out for a coffee chat</u>.</p>
                </div> */}
            </div>
        );
    }
}
  
class BioCollection extends Component {
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
                <div className="board-cards">      
                    {this.props.data.map((data, key) => (<div key={key} className="small">
                        <div className="card"  onClick={() => this.getModal(data)}>
                        <img className="card-img" src={data.profile} alt=""></img>
                        <h4>{data.name}</h4>
                        <h5>{data.position}</h5>
                        </div>
                    </div>))}
                </div>
                <Bio
                    show={this.state.showModal}
                    onHide={this.hideModal}
                    dataModal={this.state.dataModal}
                    description={<b>TEST</b>}
                />
            </div>
        );
    };
}

class Bio extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    {this.props.show && (
                        <div className="modal">
                            <div className="modal-main fade-in">
                                <div className="modal-content">
                                    <div className="modal-text">
                                        <h2>{this.props.dataModal.name}</h2>
                                        <p><b>Email:</b> <a href={"mailto:" + this.props.dataModal.email}>{this.props.dataModal.email}</a></p>
                                        <p><b>School:</b> {this.props.dataModal.school} {this.props.dataModal.grad_year}</p>
                                        <p><b>Commitments/Clubs:</b> {this.props.dataModal.commitments}</p>
                                        <p><b>Hobbies:</b> {this.props.dataModal.hobbies}</p>
                                    </div>
                                    <div  className="modal-img" >
                                        <img src={this.props.dataModal.profile} alt=""></img>
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
                                    {this.props.dataModal.ig_url &&
                                        <a href={this.props.dataModal.fb_url} target="_blank" rel="noopener noreferrer">
                                            <div id="instagram"><FontAwesomeIcon icon={faInstagram}/></div>
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

export default Board;