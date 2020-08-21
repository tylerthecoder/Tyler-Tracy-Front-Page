import React, { Component } from "react";
import { LINKEDIN_URL, RESUME_LINK } from "../constants";

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
        <a href={RESUME_LINK}> Resume </a>
        <span>
          <b>Email: </b>
          <a href="mailto:tylertracy1999@gmail.com">
            tylertracy1999@gmail.com{" "}
          </a>
        </span>
        <a href={LINKEDIN_URL}> Linkedin </a>
      </div>
    );
  }
}
