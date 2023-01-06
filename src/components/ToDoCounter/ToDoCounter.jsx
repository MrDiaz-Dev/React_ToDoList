// @ts-nocheck
import { useContext } from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import './ToDoCounter.css';

const ToDoCounter = () => {

  const { 
    total, 
    completed 
  } = useContext(ToDoContext)

  return (
    <h2 className="ToDoCounter"> 
      Has completado {completed} de {total} Tareas 
    </h2>
  )
}

export {ToDoCounter};