import React from 'react'
import './card.styles.css'
export const Card = (props) => {
    return <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set6&size=180x180`} />
        <h1 key={props.monster.id}>{props.monster.name} </h1>
    </div>
}