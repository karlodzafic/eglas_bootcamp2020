import React from "react";

const History = ({ history }) => {
    let playerScore = 0;
    let computerScore = 0;

    if (history.length === 0){
        return <div className="scoreboard">PAR NEPAR IGRA</div>;
    } 
       
    for(let i = 0; i < history.length; i++){
        if(history[i]){
            playerScore += 1;
        } else{
            computerScore += 1;
        }
    }
    
    return <div className="scoreboard">Igrac {playerScore}:{computerScore} Kompjuter</div>;
}

export default History;