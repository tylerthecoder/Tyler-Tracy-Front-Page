import React, { Component } from 'react';

const containerStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  backgroundColor: "black",
}

const titleStyle = {
  color: "white",
  width: "50%",
  fontSize: "4em",
  margin: "10px",
  alignSelf: "center",
}

const contentStyle = {
  color: "white",
  width: "50%",
  padding: "20px",
}

export default class Banner extends Component {

  render() {
    const { title, content } = this.props;
    return (
      <div style={ containerStyle } >
        <h1 style={ titleStyle }> { title } </h1>
        <p style={ contentStyle }> { content } </p>
      </div>
    )
  }
}