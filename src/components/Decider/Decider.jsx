import React from "react";
import './styles.css';

const Decider = ({ previousScore, score, scoreChanger }) => {
    return (
        <button className="decider" onClick={scoreChanger}>+ {score - previousScore}</button>
    );
};

export default Decider;