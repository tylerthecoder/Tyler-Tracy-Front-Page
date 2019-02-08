import React, { PureComponent } from 'react';
import { Parallax } from 'react-parallax';
import UniversityCard from "./university-card";
import ProfileImgCard from "./profile-card";
import SupplyPikeCard from "./supplyPike-card";

const containerStyle = {
  height: "100vh",
  width: "100%",
  padding: "10px",
  textAlign: "left",
}

export default class Bio extends PureComponent {
  render() {
    return (
      <Parallax
          blur={0}
          bgImage={require('../../images/red2.png')}
          strength={700}
        >
        <div style={containerStyle}>
          <ProfileImgCard />
          <UniversityCard />
          <SupplyPikeCard />
        </div>
      </Parallax>
    )
  }
}