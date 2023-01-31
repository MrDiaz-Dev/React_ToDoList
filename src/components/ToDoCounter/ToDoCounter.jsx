import { Fragment } from 'react';
import './ToDoCounter.css';

const ToDoCounter = ({ total, completed, loading, storageChange}) => {

  let toDoCounterClassName = 'ToDoCounter'

  if (!!loading) {
    toDoCounterClassName = 'ToDoCounter--loading';
  }
  if (!!storageChange) {
    toDoCounterClassName = 'ToDoCounter--bloked';
  }

  return (
    <Fragment>
      <br />
      <h2 className={toDoCounterClassName}> 
        {!loading && `Has completado ${completed} de ${total} Tareas`}  
        {!!loading && `Cargando Tareas...`} 
      </h2>
    </Fragment>
  )
}

export {ToDoCounter};

