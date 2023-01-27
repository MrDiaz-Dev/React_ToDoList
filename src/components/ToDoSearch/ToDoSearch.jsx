import './ToDoSearch.css';

const ToDoSearch = ({ searchValue, setSearchValue, loading }) => {

  const onSearchToDos = (event) =>   {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <input 
      className="ToDoSearch" placeholder='Buscardor de Tareas' 
      value={searchValue}
      disabled={!!loading}
      onChange={() => {
        onSearchToDos(event);
      }}
    />
  )
}

export {ToDoSearch};