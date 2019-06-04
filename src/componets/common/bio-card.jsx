import React, { Component } from "react";
import Card from "@material-ui/core/Card";

const imgStyle = {
  alignSelf: "center",
  height: "100px"
};

const imgWrapper = {
  height: "100px",
  margin: "10px",
  alignSelf: "center"
};

const cardStyle = {
  minWidth: "200px",
  margin: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly"
};

const sideDivStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center"
};

export default class BioCard extends Component {
  render() {
    const { imgUrl, imgHref, children, imgAlt } = this.props;
    return (
      <Card style={cardStyle}>
        <a href={imgHref} style={imgWrapper}>
          <img src={imgUrl} alt={imgAlt} style={imgStyle} />
        </a>

        <div style={sideDivStyle}>{children}</div>
      </Card>
    );
  }
}
