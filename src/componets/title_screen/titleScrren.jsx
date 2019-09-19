import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { wait } from "../../utils";
import "./styles.css";

export default class TitleScreen extends Component {
  state = {
    subtitle: "",
    cursor: false
  };

  componentDidMount() {
    this.animateSubtitle();
  }

  async animateSubtitle() {
    for (let i = 0; i < 2; i++) {
      await wait(300);
      this.setState({ cursor: true });
      await wait(300);
      this.setState({ cursor: false });
    }

    await wait(300);

    this.setState({ cursor: true });

    const subtitleText = "Full Stack Developer";
    for (let i = 1; i < subtitleText.length + 1; i++) {
      const str = subtitleText.substr(0, i);
      await wait(100);
      this.setState({ subtitle: str });
    }

    for (let i = 0; i < 2; i++) {
      await wait(300);
      this.setState({ cursor: true });
      await wait(300);
      this.setState({ cursor: false });
    }
  }

  render() {
    const { subtitle, cursor } = this.state;
    return (
      <div>
        <Parallax
          blur={0}
          bgImage={require("../../images/red-background.jpg")}
          strength={500}
        >
          <div id="titleScreen">
            <h1> Tyler Tracy </h1>
            <div>
              <h6>{subtitle.length ? subtitle : " "}</h6>
              {cursor && <span className="cursor">│</span>}
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
