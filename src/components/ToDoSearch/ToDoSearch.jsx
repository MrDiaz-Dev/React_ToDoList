// @ts-nocheck
import { useContext} from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import './ToDoSearch.css';

const ToDoSearch = () => {

  const {
    searchValue, 
    setSearchValue 
  } = useContext(ToDoContext)

  const onSearchToDos = (event) =>   {

    const value = event.target.value;
    setSearchValue(value);

  }

  return (
    <input 
    className="ToDoSearch" placeholder='Buscardor de Tareas' 
    value={searchValue}
    onChange={() => {
      onSearchToDos(event);
    }}
    />
  )
}

export {ToDoSearch};