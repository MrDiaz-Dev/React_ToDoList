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
    totalToDos,
    storageChange 
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
          {(!children && !error && !loading && !storageChange) && searchedToDos.map(tarea => renderToDos(tarea))}
          {children && children}
        </ul>
      </section>   
    </Fragment>
  )
}

export {ToDoList};