import React, { Component } from 'react';
import SocialBtn from '../components/SocialBtn';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p id="contact-us">
                    Questions? Contact us at <b><a href="mailto:penncsaboard@gmail.com">penncsaboard@gmail.com</a> </b>
                </p>
                <SocialBtn />
            </div>
        );
        }
    }

export default Footer;