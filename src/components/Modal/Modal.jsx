import { createPortal } from 'react-dom';
import './Modal.css'

const Modal = (props) => {
  
  return (
    createPortal(
      <div className='ModalBackground'>
        {props.children}
      </div>,
      document.getElementById('modal')      
    )
  );
}

export { Modal };