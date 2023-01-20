import React from "react";
import './ToDoItem.css';
import { CompleteIcon } from '../ToDoIcon/CompleteIcon';
import { DeleteIcon } from '../ToDoIcon/DeleteIcon';

const ToDoItem = ({text, completed, completeToDos, deleteToDos}) => {

  return (
    <li className="ToDoItem">
      <CompleteIcon 
      completed={completed} 
      onComplete={completeToDos}/>
      
      <p className={`ToDoItem-p ${completed && 'ToDoItem-p--complete'}`}>
        {text}
      </p>

      <DeleteIcon onDelete={deleteToDos}/>
    </li>
  )
}

export {ToDoItem};