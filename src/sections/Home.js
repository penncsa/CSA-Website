import React, { Component } from "react";

import ImageCarousel from "../components/ImageCarousel.js";
import SocialBtn from "../components/SocialBtn.js";
import Links from "./Links.js";

function importAll(r) {
  return r.keys().map(r);
}

const GOOGLE_SHEETS_API_KEY = process.env.REACT_APP_AUTH_TOKEN;
const CAROUSEL_IMAGES_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/1ynEzX8p1P1wVxqVFl6Ksyf5g2jtqx_AMc-gnZAbv4E8/values/carousel_images?alt=json&key=${GOOGLE_SHEETS_API_KEY}`;

function imageParser(data) {
  var i;
  var images = [];

  for (i = 0; i < data.length; i++) {
    var curr_image = data[i][0];
    images.push(curr_image);
  }
  images.shift();
  return images;
}

const old_about_images = importAll(
  require.context("../images/about", false, /\.(png|jpe?g|svg|JPG)$/)
);

class Home extends Component {
  state = {
    about_images: [],
  };

  componentDidMount() {
    fetch(CAROUSEL_IMAGES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => imageParser(data.values))
      .then((data) => {
        this.setState({ about_images: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="home section" id="home">
        <div id="csa" className="fade-in-slow">
          <ImageCarousel images={this.state.about_images} />
          <Links />
        </div>
        <h4>Welcome to</h4>
        <h1 id="title">Penn CSA</h1>
        <p className="mission">
          The Chinese Students' Association (CSA) is a{" "}
          <b>social, cultural, and political organization</b> that aims to
          promote Chinese and Chinese-American affairs to the Penn community.
        </p>
        <p className="mission">
          CSA exists to create a network of individuals interested in these
          affairs and provide a way for <b>all people</b> to learn more about
          Chinese and Chinese-American culture, history, food, and news while
          creating a network with a multifaceted family of members.
        </p>
        <p className="mission">
          To carry out our mission, CSA holds numerous events including our
          annual cultural show production, holiday festivals, speaker events,
          food events, trips, study breaks, and more.
        </p>
        <div id="csa-mobile">
          <ImageCarousel images={this.state.about_images} />
          <Links />
        </div>
        <SocialBtn />
      </div>
    );
  }
}

export default Home;
