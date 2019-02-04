import React, { Component } from 'react';
import { Parallax } from 'react-parallax';


const divStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const textDiv = {
  fontSize: "4em",
  color: "white",
}

export default class TitleScreen extends Component {
  render() {
    return (
      <div>
        <Parallax
          blur={0}
          bgImage={require('../images/red-background.jpg')}
          strength={500}
        >
          <div style={divStyle}>
            <div style={textDiv}>
              <h1> Tyler Tracy </h1>
              <h6> Full-Stack Developer</h6>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}