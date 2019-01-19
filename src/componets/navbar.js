import React, { Component } from 'react';

const headerStyle = {
  listStyle: 'none',
  width: '100%',
  margin: '0px',
  padding: '0px',
  backgroundColor: 'black',
  display: 'flex',
}

const tabStyle = {
  color: 'red',
  padding: '10px',
  cursor: "pointer",
}

export default class Navbar extends Component {
  constructor() {
    super();
    this.headers = [
      {
        text: 'Home',
        color: 'red',
        link: '/'
      },
      {
        text: 'About',
        color: 'blue',
      },
      {
        text: 'Contact',
        color: 'blue',
      }
    ]
  }

  render() {
    return (
      <div>
        <ul style={headerStyle}>
          {
            this.headers.map(header => {
              return (
                <li style={tabStyle} key={Math.random()}> {header.text} </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}