import React from "react";

const Rounds = ({ history }) => {
    if(history.length === 0 ){
        return <p className="rounds">No rounds yet.</p>;
    }

    return (
        <div className="rounds">
            {history.map((game, i) => game ? <p> {i + 1}. runda: Igrac je pobijedio</p> : <p> {i + 1}. runda kompjuter je pobijedio</p>)}
        </div>
    );
}

export default Rounds;


