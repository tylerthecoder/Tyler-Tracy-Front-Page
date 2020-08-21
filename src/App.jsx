import React, { Component } from "react";
import "./App.css";
import TitleScreen from "./componets/title_screen/titleScreen";
import Creations from "./componets/creations/creations";
import Banner from "./componets/banner";
import Bio from "./componets/bio/bio";
import Footer from "./componets/footer";

const content = "Over the years I have created many different games. Some bad, some not as bad. You can find most of them below. I first started making applications in the 8th grade and keep learning more and more over the years. Most of these games are pretty basic but I think they can be fun. I hope you enjoy them!";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleScreen />
        <Banner title="About Me" />
        <Bio />
        <Banner title="Creations" content={content} /> <Creations />
        <Footer />
      </div>
    );
  }
}

export default App;
