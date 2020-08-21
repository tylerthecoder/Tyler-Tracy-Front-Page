import React, { useState, useEffect } from "react";
import { wait } from "../utils";



function useCoolEase(init, max) {
  const [val, setVal] = useState(init);

  const [stage, setStage] = useState(0);


  if (stage === 0) {
    if (val < 10) {
      setStage(1);
      return val;
    }
    setTimeout(() => setVal(val - 2), 10);
  } else if (stage === 1) {
    if (val > max) {
      setStage(2);
    }
    setTimeout(() => setVal(val + 5), 10);
  }


  return val;
}

export default function HeadShot() {
  const width = useCoolEase(150, 300);


  const invertedImageStyle = {
    filter: "invert()",
    height: "300px",
    position: "absolute"
  }

  const containerStyle = {
    width: `${width}px`,
    height: "300px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-end",
  }

  const imageStyle = {
    height: "300px",
    zIndex: "1",
  }

  return (
    <div style={{display: "flex", justifyContent: "flex-end", width: "225px"}}>
      <img
        alt="Tyler Tracy"
        style={invertedImageStyle}
        src={require("../images/headshot.png")}
      />
      <div style={containerStyle}>
        <img
          alt="Tyler Tracy"
          style={imageStyle}
          src={require("../images/headshot.png")}
        />
      </div>
    </div>
  )
}