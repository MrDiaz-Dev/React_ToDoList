import { Fragment } from "react";
import './ToDoList.css';

const ToDoList = ({ 
    children,
    error, 
    loading, 
    searchedToDos, 
    onError, 
    onLoading, 
    onEmptyToDos,
    onEmptyResults, 
    renderToDos, 
    totalToDos 
  }) => {
  return (
    <Fragment>
      <br />
      <br />
      <section className="ToDoList-container">
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !totalToDos) && onEmptyToDos()}
        {(!loading && !searchedToDos.length && !!totalToDos) && onEmptyResults()}

        <ul>
          {!children && searchedToDos.map(tarea => renderToDos(tarea))}
          {children && children}
        </ul>
      </section>   
    </Fragment>
  )
}

export {ToDoList};