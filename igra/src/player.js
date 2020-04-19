import React from "react";
import nula from "./assets/0.jpg";
import jedan from "./assets/1.jpg";
import dva from "./assets/2.jpg";
import tri from "./assets/3.jpg";
import cetri from "./assets/4.jpg";
import pet from "./assets/5.jpg";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "nula" ? nula : weapon === "jedan" ? jedan : weapon === "dva" ? dva : weapon === "tri" ? tri :
          weapon==="cetri" ? cetri : pet
              }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;
