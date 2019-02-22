import React, { Component } from "react";

const containerStyle = {
  borderTop: "solid black 2px",
  padding: "10px",
  display: "flex",
  justifyContent: "space-evenly"
};

export default class Footer extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <a href="https://tgt101.com/resume/"> Resume </a>
        <span>
          <b>Email:</b>
          <a href="mailto:tylertracy1999@gmail.com">
            {" "}
            tylertracy1999@gmail.com{" "}
          </a>
        </span>
        <a href="https://www.linkedin.com/in/tyler-tracy/"> Linkedin </a>
      </div>
    );
  }
}
