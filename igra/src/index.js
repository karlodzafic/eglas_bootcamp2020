import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./player";
import "./styles.css";

const weapons = ["nula","jedan", "dva", "tri","cetri","pet"];
class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === "nula" && playerTwo === "jedan") ||
      (playerOne === "jedan" && playerTwo === "dva") ||
      (playerOne === "dva" && playerTwo === "tri") ||
      (playerOne === "tri" && playerTwo === "cetri") ||
      (playerOne === "cetri" && playerTwo === "pet")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>PAR NEPAR IGRA</h1>

        <div>
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("nula")}
          >
            nula
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("jedan")}
          >
            jedan
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("dva")}
          >
            dva
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("tri")}
          >
            tri
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("cetri")}
          >
            cetri
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("pet")}
          >
            pet
          </button>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <button type="button" onClick={this.startGame}>
          Start!
        </button>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);