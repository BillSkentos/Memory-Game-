import {React ,useState} from 'react'
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import '../App.css';
import {usePokemon} from './ScoreContext';

export default function GameStatus() {

  const {resetGame,hasWon} = usePokemon();

  const handleClose = ()=>{
    resetGame();
  }

  const wonText = (
    <div className="modal-box won ">
      You won ! 
    </div>
  )

  return (
    <div className="modal-container">
      <Modal 
      open={hasWon}
      onClose={handleClose}
      >
       <Slide direction="up" in = {hasWon} mountOnEnter unmountOnExit>
         {wonText}
       </Slide>
     </Modal>
    </div>
  )
}
