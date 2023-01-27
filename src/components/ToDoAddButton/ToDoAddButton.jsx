// @ts-nocheck
import { useContext } from "react";
import './ToDoAddButton.css';

const ToDoAddButton = ({ setOpenModal }) => {

  const onClickAddButton = () => {
    setOpenModal(prevState => !prevState);
  }

  return (
    <button 
    className="ToDoAddButton"
    onClick={() => {
      onClickAddButton();
    }}
    >
      +
    </button>
  )
}

export {ToDoAddButton};