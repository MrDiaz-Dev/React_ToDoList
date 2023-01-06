// @ts-nocheck
import './ToDoForm.css';
import { useContext,useState } from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';

const ToDoForm = () => {

  const { 
    addToDo, 
    setOpenModal 
  } = useContext(ToDoContext)

  const [newToDoValue, setNewToDoValue] = useState('')

  const textListener = (event) => {
    setNewToDoValue(event.target.value)
  }

  const onCancel = () => { 
    setOpenModal(prevState => !prevState);
  }

  const onAdd = (event) => { 
    addToDo(newToDoValue);
    setOpenModal(prevState => !prevState);
  }

  return (
    <form action="#" onSubmit={onAdd}>

      <label> Escribe tu nueva Tarea </label>
      
      <textarea 
        name="" 
        id="" 
        cols="30" 
        rows="10"
        placeholder='Inserte la tarea a guardar'
        value={newToDoValue}
        onChange={() => textListener(event)}
      ></textarea>

      <div className="TodoForm-buttonContainer">

        <button 
          onClick={onCancel}
          type='button'
          className="TodoForm-button TodoForm-button--cancel"
        > Cancelar </button>

        <button 
          type='submit'
          className="TodoForm-button TodoForm-button--add"
        > Añadir </button>

      </div>

    </form>
  );
}

export { ToDoForm };