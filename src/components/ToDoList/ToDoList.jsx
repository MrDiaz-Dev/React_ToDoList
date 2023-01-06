import React from "react";
import './ToDoList.css';

const ToDoList = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>      
  )
}

export {ToDoList};