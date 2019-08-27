import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const profileImgStyle = {
  height: "400px",
  borderRadius: "50%",
  display: "block"
};

const cardStyle = {
  minWidth: "200px",
  margin: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center"
};

export default class ProfileImgCard extends PureComponent {
  render() {
    return (
      <Card style={cardStyle}>
        <CardContent>
          <img
            style={profileImgStyle}
            alt="Tyler Tracy"
            src={require("../../images/tyler.jpg")}
          />
        </CardContent>
      </Card>
    );
  }
}
