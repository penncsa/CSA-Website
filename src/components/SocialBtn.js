import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";

class SocialBtn extends Component{
    render() {
        return (
            <div>  
                <a href="http://eepurl.com/tX5_j" target="_blank" rel="noopener noreferrer">
                    <button id="listserv-btn">Join Our Mailing List</button>
                </a>
                <a href="https://www.instagram.com/upenncsa/" target="_blank" rel="noopener noreferrer">
                    <div id="instagram"><FontAwesomeIcon icon={faInstagram}/></div>
                </a>
                <a href="https://www.facebook.com/penn.csa/" target="_blank" rel="noopener noreferrer">
                    <div id="facebook"><FontAwesomeIcon icon={faFacebook} /></div>
                </a>
            </div>
        );
        }
    }

export default SocialBtn;