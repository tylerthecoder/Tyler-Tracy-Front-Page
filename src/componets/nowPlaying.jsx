import React from "react";

export default function NowPlaying({ currentSong }) {
  if (!currentSong) {
    return <span> </span>;
  }

  if (currentSong.name) {
    const statusText =
      currentSong.state === "PLAYING"
        ? "I'm listening to"
        : "I was listening to";

    return (
      <div className="flex-container-center">
        <p id="listeningToText"> {statusText} </p>
        <div className="chip">
          <div className="flex-container-center">
            <img src={currentSong.imageUrl} alt={"Song cover art"} />
            <div>
              <p id="songName"> {currentSong.name} </p>
              <p id="artistName"> by {currentSong.artistName} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <span></span>;
}
