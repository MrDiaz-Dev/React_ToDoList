// @ts-nocheck
import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

const ToDoContext = createContext('');

const ToDoProvider = (props) => { 

  const {
    item: toDos, 
    saveItem: saveToDos, 
    loading: loading,
    error: error
  } = useLocalStorage('TODOS_V1')

  const [openModal, setOpenModal] = useState(false);
  
  const [searchValue, setSearchValue] = useState('');
  
  let searchedToDos = [];
  
  if (!(searchValue.length >= 1)) {
    searchedToDos = toDos;
  }else{
    searchedToDos = toDos.filter(tarea => {
      const toDoText = tarea.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    })
  };  

  const completedToDos = toDos.filter(tarea => !!tarea.completed).length;
  
  const totalToDos = toDos.length;

  const addToDo = (text) => {
    let newToDos = [...toDos];
    let newToDo = [{
      text,
      completed: false
    }];
    newToDos = newToDo.concat(newToDos);
    saveToDos(newToDos);
  }
  
  const completeToDos = (text) => {
    const toDoIndex = toDos.findIndex(tarea => tarea.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = !toDos[toDoIndex].completed;
    saveToDos(newToDos);
  }
  
  const deleteToDos = (text) => {
    const toDoIndex = toDos.findIndex(tarea => tarea.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }  


  return (
    <ToDoContext.Provider value={{
      error,
      loading,
      total: totalToDos ,
      completed: completedToDos,
      searchValue,
      setSearchValue,
      completeToDos,
      deleteToDos,
      searchedToDos,
      openModal,
      setOpenModal,
      addToDo
    }}>
      {props.children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider };