import React, { Component } from 'react';
import './App.css';
import Navbar from './componets/navbar';
import TitleScreen from './componets/titleScreen';
import Creations from './componets/creations';
import Banner from "./componets/banner";

const content = "Over the years I have created many different games. Some bad, some not as bad. You can find most of them below. I first started making applications in the 8th grade and keep learning more and more over the years. Most of these games are pretty basic but I think they can be fun. I hope you enjoy them!"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TitleScreen/>
        <Banner title="Creations" content={ content }/>
        <Creations/>
      </div>
    );
  }
}

export default App;
