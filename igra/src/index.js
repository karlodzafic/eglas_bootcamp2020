import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./player";
import "./styles.css";

const weapons = ["nula","jedan", "dva", "tri","cetri","pet"];
const odabir =  ["par","nepar"];
class App extends Component {
  state = {
    playerOne: weapons[0],
    playerParNepar: odabir[0],
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
    const { playerOne, playerTwo,playerParNepar } = this.state;

    if (playerOne === playerTwo) {
       
       return this.startGame();
    } else{
      let igrac=0;
      while(weapons[igrac]!==playerOne){
        igrac++;
      }
      let komp=0;
      while(weapons[komp]!==playerTwo){
        komp++;
      }

      let rez=komp+igrac;

      if((rez%2===0 && playerParNepar==="par") || (rez%2!==0 && playerParNepar==="nepar") ){
        return "Igrac je pobijedio";
      }
      else{
        return "Komp pobjeduje";
      }
      

    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };

  selectParNepar = odabir =>{
    this.setState({
      playerParNepar: odabir
    });
  };


  onChange = () => {
    if (this.state.color === 'black'){
      this.setState({ color: 'grey' });
    }
    else {
      this.setState({ color: 'black' });
    }
  }


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
        <div>
        <button className="parneparBtn" onClick={() => this.selectParNepar("par")}>
            Par
          </button></div>
          <div>
          <button className="parneparBtn" onClick={() => this.selectParNepar("nepar")}>
            Nepar
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