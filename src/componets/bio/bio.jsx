import React, { PureComponent } from "react";
import { Parallax } from "react-parallax";
import ProfileImgCard from "./profile-card";
import BioCard from "../common/bio-card";

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
            <BioCard
              imgUrl={require("../../images/uarkLogo.png")}
              imgHref="https://www.uark.edu"
              imgAlt="University of Arkansas Logo"
            >
              <p> Rising Junior </p>
              <p>
                Computer Science Major <br /> Mathematics Minor{" "}
              </p>
              <p> GPA: 4.0 </p>
            </BioCard>
            <BioCard
              imgUrl={require("../../images/supplyLogo.png")}
              imgHref="https://www.supplypike.com"
              imgAlt="SupplyPike Logo"
            >
              <p> Summer 18 - Spring 19 </p>
              <p> Software Engineering Intern </p>
            </BioCard>
            <BioCard
              imgUrl={require("../../images/googleLogo.png")}
              imgHref="https://www.google.com"
              imgAlt="Google Logo"
            >
              <p> Summer 19 - Present </p>
              <p> Software Engineering Intern </p>
              <p> Google Cloud AutoML Team </p>
            </BioCard>
          </div>
        </div>
      </Parallax>
    );
  }
}
