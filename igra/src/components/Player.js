import React from "react";

import jedan from "../assets/1.jpg";
import dva from "../assets/2.jpg";
import tri from "../assets/3.jpg";
import cetiri from "../assets/4.jpg";
import pet from "../assets/5.jpg";

const Player = ({ weapon }) => {
    let image = null;

    switch (weapon) {
        case "1": image = jedan; break;
        case "2": image = dva; break;
        case "3": image = tri; break;
        case "4": image = cetiri; break;
        case "5": image = pet; break;
        default: image = jedan;
    }

    return <img className="player-image" src={image} alt="Par Nepar" />;
}

export default Player;
