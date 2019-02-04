import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';


const myCreations = require('../creationData.json');

const rootStyle = {
  padding: "10px",
}

const imgStyle = {
  width: "100%",
  border: "solid red 3px",
  borderRadius: "20px",
}

const creationStyle = {
  padding: "10px 40px",
  margin: "10px",
  cursor: "pointer",
  backgroundColor: "lightgrey",
}

class Creation extends PureComponent {
  render() {
    const { creation } = this.props;
    const { link, name, img, description } = creation;
    return (
      <Grid item xs={4}>
        <Paper style={creationStyle}>
          <h1> {name} </h1>
          <a href={link}>
            <img
              src={img}
              style={imgStyle}
              alt={name + " Picture"}
            />
          </a>
          <p> { description } </p>
        </Paper>
      </Grid>
    )
  }
}



export default class Creations extends PureComponent {
  render() {
    return (
      <Parallax
        blur={0}
        bgImage={require("../images/white-background.jpg")}
        strength={500}
      >
        <div style={rootStyle}>
          <Grid container spacing={24}>
            {
              myCreations.creations.map(c => (
                <Creation creation={c} key={Math.random()}/>
              ))
            }
          </Grid>
        </div>
      </Parallax>
    )
  }
}