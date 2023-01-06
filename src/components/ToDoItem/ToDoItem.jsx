import React from "react";
import './ToDoItem.css';

const ToDoItem = ({text, completed, completeToDos, deleteToDos}) => {

  return (
    <li className="ToDoItem">
      <span 
      className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
      onClick={() => {
        completeToDos(text);
      }}
      >
        √
      </span>
      <p className={`ToDoItem-p ${completed && 'ToDoItem-p--complete'}`}>
        {text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={() => {
        deleteToDos(text);
      }}
      >
        X
      </span>
    </li>
  )
}

export {ToDoItem};