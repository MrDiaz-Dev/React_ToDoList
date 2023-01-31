import { Fragment } from 'react';
import './ToDoSearch.css';

const ToDoSearch = ({ searchValue, setSearchValue, loading, storageChange }) => {

  const onSearchToDos = (event) =>   {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <Fragment>
      <br />
      <input 
        className="ToDoSearch" placeholder='Buscardor de Tareas' 
        value={searchValue}
        disabled={!!loading || storageChange}
        onChange={() => {
          onSearchToDos(event);
        }}
      />
    </Fragment>

  )
}

export {ToDoSearch};