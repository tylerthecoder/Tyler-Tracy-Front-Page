import React, { Component } from 'react';




const listStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
}


const skills = ["JavaScript", "NodeJS", "Python", "C++"];

export default class Skills extends Component {
  render() {
    return (
      <div>
        <h1> Main Skills </h1>
        <ul style={listStyle}>
          {
            skills.map(skill => <Skill skill={skill} />)
          }
        </ul>
      </div>
    )
  }
}


const skillStyle = {
  float: "left",
  marginLeft: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}

const skillImgStyle = {
  height: "100px",
  width: "100px",
  backgroundColor: "red",
  borderRadius: "50%",
  border: "solid black 2px",

}

class Skill extends Component {
  render() {
    return (
      <div style={skillStyle}>
        <div style={skillImgStyle}></div>
        <p> {this.props.skill} </p>
      </div>
    )
  }
}
