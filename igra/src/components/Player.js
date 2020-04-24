import React from "react";

import nula from "../assets/0.jpg";
import jedan from "../assets/1.jpg";
import dva from "../assets/2.jpg";
import tri from "../assets/3.jpg";
import cetiri from "../assets/4.jpg";
import pet from "../assets/5.jpg";

const Player = ({ weapon }) => {
    let image = null;

    switch (weapon) {
        case "nula": image = nula; break;
        case "jedan": image = jedan; break;
        case "dva": image = dva; break;
        case "tri": image = tri; break;
        case "cetiri": image = cetiri; break;
        case "pet": image = pet; break;
        default: image = nula;
    }

    return <img className="player-image" src={image} alt="Par Nepar" />;
}

export default Player;
