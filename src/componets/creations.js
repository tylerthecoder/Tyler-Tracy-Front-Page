import React, { PureComponent } from 'react';

const myCreations = require('../creationData.json');
console.log(myCreations)


const imgStyle = {
  width: "100%"
}

const creationStyle = {
  width: "33%",
  margin: "10px",
}

const creationsStyle = {
  display: "flex",
  justifyContent: "center",
}

class Creation extends PureComponent {
  render() {
    const { creation } = this.props;
    const { link, name, img } = creation;
    return (
      <div style={creationStyle}>
        <h2> {name} </h2>
        <a href={link}>
          <img
          src={img}
          style={imgStyle}
          alt={name + " Picture"}
          />
        </a>
      </div>
    )
  }
}



export default class Creations extends PureComponent {
  render() {
    return (
      <div>
        <h1> Creations </h1>
        <div style={creationsStyle}>
        {
          myCreations.creations.map(c => (
            <Creation creation={c} key={Math.random()}/>
          ))
        }
        </div>
      </div>
    )
  }
}