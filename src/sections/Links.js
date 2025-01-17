import React, { Component } from "react";

const GOOGLE_SHEETS_API_KEY = process.env.REACT_APP_AUTH_TOKEN;
const LINK_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/1ynEzX8p1P1wVxqVFl6Ksyf5g2jtqx_AMc-gnZAbv4E8/values/links?alt=json&key=${GOOGLE_SHEETS_API_KEY}`;

function linkParser(links) {
  var i;
  var new_links = [];
  for (i = 0; i < links.length; i++) {
    var curr_link = {};

    curr_link["display"] = links[i][0];
    curr_link["url"] = links[i][1];

    new_links.push(curr_link);
  }
  new_links.shift();
  return new_links;
}

class Links extends Component {
  state = {
    links: [],
  };

  componentDidMount() {
    fetch(LINK_ENDPOINT)
      .then((res) => res.json())
      .then((data) => linkParser(data.values))
      .then((data) => {
        this.setState({ links: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        {this.state.links.length > 0 && (
          <>
            <h2 style={{ margin: "10px" }}>Important Links</h2>
            <LinkCollection data={this.state.links} />
          </>
        )}
      </div>
    );
  }
}

class LinkCollection extends Component {
  state = {
    showModal: false,
    dataModal: {
      name: "",
    },
  };
  getModal = (data) => {
    this.setState({ showModal: true, dataModal: data });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="links">
        {this.props.data.map((data, key) => (
          <div key={key}>
            <a className="navbtn" href={data.url} target="_blank">
              {data.display}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Links;
