import React, { Component } from 'react';
import './App.css';
import Navbar from './componets/navbar';
import TitleScreen from './componets/titleScreen';
import Skills from './componets/skills';
import Creations from './componets/creations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TitleScreen/>
        <Creations/>
      </div>
    );
  }
}

export default App;
