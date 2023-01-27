import './ToDoCounter.css';

const ToDoCounter = ({ total, completed, loading }) => {
  
  return (
    <h2 className={`ToDoCounter${!!loading && '--loading'}`}> 
      {!loading && `Has completado ${completed} de ${total} Tareas`}  
      {!!loading && `Cargando Tareas...`} 
    </h2>
  )
}

export {ToDoCounter};

