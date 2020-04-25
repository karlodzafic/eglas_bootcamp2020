import React from "react";



const Rounds = ({history}) =>{
let array=[];
let word="";
let i;
if(history.length===0){
    array=[];
    return null;
}
    for(i=0;i<history.length;i++){
        if(history[i]){
            word=".Runda Igrac je pobijedio";
            
            array=[<tr>{word}</tr>,...array];
        }
        else{
            word=".Runda Igrac je pobijedio";
            
            array=[<tr>{word}</tr>,...array];
        }
       
    }

return <div className="rounds">{array}</div>;

}

export default Rounds;