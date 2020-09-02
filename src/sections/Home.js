
import React, { Component } from 'react';

import ImageCarousel from "../components/ImageCarousel.js"
import SocialBtn from "../components/SocialBtn.js"
import Links from "./Links.js"

function importAll(r) {
  return r.keys().map(r);
}
const about_images = importAll(require.context('../images/about', false, /\.(png|jpe?g|svg|JPG)$/));

class Home extends Component{
    render() {
        return (
            <div className="home section" id="home">
                <div id="csa" className="fade-in-slow">
                    <ImageCarousel images={about_images} />
                    <Links />
                </div>
                <h4>Welcome to</h4>
                <h1 id="title">Penn CSA</h1>
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
                    <ImageCarousel images={about_images} />
                    <Links />
                </div>
                <SocialBtn />          
            </div>
        );
    }
  }

export default Home;