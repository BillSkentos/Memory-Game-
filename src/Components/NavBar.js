import React from 'react';
import '../App.css';
import ModalBox from './ModalBox';
import {usePokemon} from './ScoreContext';
import GameStatus from './GameStatus';

export default function NavBar() {
  const {score,topScore} = usePokemon();
  return (
    <div className="nav-container">
      <h1 className="app-title">Pokemon Memory Game</h1>
      <div className="scores-container">
          <div className="current-score">
            <h3>Score : {score}</h3>
          </div>
          <div className="top-score">
            <h3>Top Score : {topScore}</h3>
          </div>
          <ModalBox />  
          <GameStatus/>
      </div>
    </div>
  )
}
