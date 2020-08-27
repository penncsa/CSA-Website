import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js'

import Home from './sections/Home.js'
import Events from './sections/Events.js'
import FamilyGroups from './sections/FamilyGroups.js'
import Board from './sections/Board.js'
import Footer from './sections/Footer.js'

class App extends Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <div className="App">
            <NavBar />
            <Home/>
            <Events/>
            <FamilyGroups />
            <Board/>
            <Footer />
          </div>
        </body>
      </html>
    );
  }
}

export default App; 