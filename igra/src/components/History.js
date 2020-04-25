import React from "react";



const History = ({history}) =>{

    let igrac=0;
    let comp=0;
if(history.length===0){
    return <div className="scoreboard">PAR NEPAR IGRA!</div>;
}
else{
    let i;

    for(i=0;i<history.length;i++){
        if(history[i]){
            igrac=igrac+1;
        }
        else{
            comp=comp+1;;
        }
    }
    
return <div className="scoreboard">Igrac {igrac}:{comp} Comp</div>;
}


}

export default History;