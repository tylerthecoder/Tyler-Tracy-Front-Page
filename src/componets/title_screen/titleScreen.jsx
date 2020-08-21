import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { wait } from "../../utils";
import HeadShot from "../headshot";
import "./styles.css";


// function useTypeyText(message) {
//   const [text, setText] = useState("");
//   const [cursor, setCursor] = useState(false);

//   const [state, setState] = useState(0);
//   const [blinkCount, setBlinkCount] = useState(0);

//   if (state === 0) { // blink
//     setTimeout(() => {;
//       if ()
//       setCursor(false)
//     }, 300);
//   }



//   return [text, cursor];
// }

export default function TitleScreen() {
  const [subtitle, setSubtitle] = useState("");
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    animateSubtitle();
  }, [])

  async function animateSubtitle() {
    for (let i = 0; i < 2; i++) {
      await wait(300);
      setCursor(true);
      await wait(300);
      setCursor(false);
    }

    await wait(300);

    setCursor(true);

    const subtitleText = "Full Stack Developer";
    for (let i = 1; i < subtitleText.length + 1; i++) {
      const str = subtitleText.substr(0, i);
      await wait(100);
      setSubtitle(str);
    }

    await wait(300);
    setCursor(false);
    await wait(300);
    setCursor(true);
    await wait(300);
    setCursor(false);
  }

  return (
    <Parallax
      blur={0}
      bgImage={require("../../images/red-background-2.jpg")}
      strength={500}
    >
      <div id="titleScreen">
        <div>
          <h1> Hi, I'm Tyler </h1>
          <div className="typeText">
            <h6>{subtitle.length ? subtitle : " "}</h6>
            {cursor && <span className="cursor">│</span>}
          </div>
        </div>
        <HeadShot />
      </div>
    </Parallax>
  );
}
