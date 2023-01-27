// @ts-nocheck
import './ToDoForm.css';
import { useState } from 'react';

const ToDoForm = ({ addToDo, setOpenModal }) => {

  const [newToDoValue, setNewToDoValue] = useState('')

  const textListener = (event) => {
    setNewToDoValue(event.target.value)
  }

  const onCancel = () => { 
    setOpenModal(prevState => !prevState);
  }

  const onAdd = () => { 
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