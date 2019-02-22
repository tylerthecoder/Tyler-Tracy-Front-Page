import React, { PureComponent } from "react";
import { Parallax } from "react-parallax";
import UniversityCard from "./university-card";
import ProfileImgCard from "./profile-card";
import SupplyPikeCard from "./supplyPike-card";

const containerStyle = {
  display: "flex",
  flexDirection: "column"
};

const outerStyle = {
  display: "inline-flex",
  flexDirection: "row",
  justifyContent: "center"
};

export default class Bio extends PureComponent {
  render() {
    return (
      <Parallax
        blur={0}
        bgImage={require("../../images/red2.png")}
        strength={700}
      >
        <div style={outerStyle}>
          <div style={containerStyle}>
            <ProfileImgCard />
            <UniversityCard />
            <SupplyPikeCard />
          </div>
        </div>
      </Parallax>
    );
  }
}
