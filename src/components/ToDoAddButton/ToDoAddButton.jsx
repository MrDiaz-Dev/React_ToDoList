// @ts-nocheck
import { useContext } from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import './ToDoAddButton.css';

const ToDoAddButton = () => {

  const { setOpenModal } = useContext(ToDoContext);

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