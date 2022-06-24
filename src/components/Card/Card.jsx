import React from "react";
import './styles.css';

const Card = ({ suit, value }) => {

    return (
        <div className={'card'}>
            <p className={`card-top-value${['diamonds', 'hearts'].includes(suit) ? '-red' : '-black'}`}>{value}</p>
            <img src={`./assets/${suit}.svg`} alt="" className="card-suit" />
            <p className={`card-bottom-value${['diamonds', 'hearts'].includes(suit) ? '-red' : '-black'}`}>{value}</p>
        </div>
    );
};

export default Card;