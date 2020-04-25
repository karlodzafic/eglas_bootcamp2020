import React from 'react';
import board from "./assets/brown.jpg";
import History from "./components/History";
import Rounds from "./components/Rounds"
import Player from "./components/Player";
import "./styles.css";

const weapons = ["0","1", "2", "3","4","5"];

class App extends React.Component {
  state = {
    playerOneHand: weapons[0],
    playerTwoHand: weapons[0],
    playerChoice: null,
    winner: null,
    history:[],
  };

  startGame = () => {
    let counter = 0;

    let gameInterval = setInterval(() => {
      counter++;
      
      this.setState({ playerTwoHand: weapons[Math.floor(Math.random() * weapons.length)], winner: null });

      if (counter > 5) {
        clearInterval(gameInterval);

        const winner = this.selectWinner();
        
       this.setState({ history: [...this.state.history, winner] });
      }
    }, 100);
  };

//   startGame = () => {
//     this.setState({ playerTwoHand: weapons[Math.floor(Math.random() * weapons.length)], winner: null });

//     const winner = this.selectWinner();

//     this.setState({ history: [...this.state.history, winner] });
//   } 

  selectWinner = () => {
        const { playerOneHand, playerTwoHand, playerChoice } = this.state;

        const player1Choice = weapons.indexOf(playerOneHand);
        const player2Choice = weapons.indexOf(playerTwoHand);
        const result = player1Choice + player2Choice;

        if((result % 2 === 0 && playerChoice === "par") || (result % 2 !== 0 && playerChoice === "nepar")){
            return 1;
        } else {
            return 0;
        }
    };

  selectWeapon = weapon => this.setState({ playerOneHand: weapon });

  selectParNepar = choice => this.setState({ playerChoice: choice });

  render() {
    const { playerOneHand, playerTwoHand, playerChoice,history } = this.state;

    return (
      <div className="main-container">
        <div className="player-container">
          <Player weapon={playerOneHand} />
          <img src={board} alt="board" className="daska"/>
               <History history={history}/>
               <Rounds history={history}/>
          <Player weapon={playerTwoHand} />
        </div>
        <div className="buttons-container">
            {weapons.map((weapon, i) => <button key={i} className={`button ${playerOneHand === weapon ? 'active' : null}`} onClick={() => this.selectWeapon(weapon)}>{weapon}</button>) }
        </div>
        <div className="buttons-container">
            <button className={`button ${playerChoice === 'par' ? 'active' : null}`} onClick={() => this.selectParNepar("par")}>Par</button>
            <button className={`button ${playerChoice === 'nepar' ? 'active' : null}`} onClick={() => this.selectParNepar("nepar")}>Nepar</button>
        </div>
        {/* <div className="winner">{winner ? this.selectWinner() : null}</div> */}
        <button className="button" type="button" onClick={playerChoice ? this.startGame : null}>Start!</button>
      </div>
    );
  }
}

export default App;