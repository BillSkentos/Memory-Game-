import React from 'react';

export default function PokeCard(props) {
  return (
    <div className="poke-card">
      <img src = {props.picture} alt = "pokemon-card" className="poke-entry" />
      <h5 className="poke-name"> {props.name}</h5> 
    </div>
  )
}
