import {React ,useState} from 'react'
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import '../App.css';

export default function ModalBox(){
  
  const [openned,setOpenned] = useState(false);
 
  const handleOpen = ()=>{
    setOpenned(true);
  }

  const handleClose = ()=>{
    setOpenned(false);
  }

  const modalText = (
    <div className="modal-box"> 
      Don't click on the same image more than once ! You win by clicking all images once . If you click twice your score becomes 0 .
    </div>);
  
  return (
    <div className="modal-container">
      <button onClick = {handleOpen} className="instructions-button">
        Instructions
     </button>
     <Modal 
      open={openned}
      onClose={handleClose}
     >
       <Slide direction="up" in = {openned} mountOnEnter unmountOnExit>
         {modalText}
       </Slide>
     </Modal>
    </div>
  )
}
