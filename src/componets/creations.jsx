import React, { PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { Parallax } from "react-parallax";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const myCreations = require("../creationData.json");

// don't import from json, move creation data to the backend.

const rootStyle = {
  padding: "10px"
};

const imgStyle = {
  width: "101%",
  height: "200px"
};

const creationStyle = {
  cursor: "pointer",
  backgroundColor: "#840000",
  color: "white",
  display: "inline-block",
  width: "100%",
  height: "100%"
};

const containerStyle = {
  padding: "10px"
};

class Creation extends PureComponent {
  render() {
    const { creation } = this.props;
    const { link, name, img, description } = creation;
    return (
      <Grid item xs={12} sm={6} lg={4}>
        <Card style={creationStyle}>
          <CardActionArea href={link}>
            <CardMedia image={img} style={imgStyle} />
            <div style={containerStyle}>
              <h1> {name} </h1>
              <p> {description} </p>
            </div>
          </CardActionArea>
        </Card>
      </Grid>
    );
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
          <Grid
            container
            spacing={16}
            alignItems="stretch"
            direction="row"
            justify="center"
          >
            {myCreations.creations.map(c => (
              <Creation creation={c} key={Math.random()} />
            ))}
          </Grid>
        </div>
      </Parallax>
    );
  }
}
