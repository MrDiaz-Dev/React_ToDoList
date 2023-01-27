import './App.css';

import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoAddButton } from '../ToDoAddButton/ToDoAddButton';
import { Modal } from '../Modal/Modal';
import { ToDoForm } from '../ToDoForm/ToDoForm';
import { ToDosLoading } from '../ToDosLoading/ToDosLoading'
import { EmptyToDos } from '../EmptyToDos/EmptyToDos';
import { ToDosError } from '../ToDosError/ToDosError';
import { ToDoHeader } from '../ToDoHeader/ToDoHeader'
import { EmptyResults } from '../EmptyResults/EmptyResults';
import { useToDos } from './useToDos';

const App = () => {

  const { 
    loading, 
    error,
    errorInfo, 
    searchedToDos, 
    completeToDos, 
    deleteToDos,
    openModal,
    totalToDos, 
    completedToDos,
    searchValue, 
    setSearchValue,
    addToDo,
    setOpenModal 
  } = useToDos();
  
  return (
    <div className='app'>
      {/* INCIO DE TO DO PAGE */}

      <ToDoHeader loading={loading}>
        <br />
        <ToDoCounter
          total={totalToDos}
          completed={completedToDos}
          />
        <br />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </ToDoHeader> 

      <ToDoList 
        error={error}
        loading={loading}
        searchedToDos={searchedToDos}
        totalToDos={totalToDos}
        onError={() => <ToDosError errorInfo={errorInfo} />}
        onLoading={() => <ToDosLoading />}
        onEmptyToDos={() => <EmptyToDos />}
        onEmptyResults={() => <EmptyResults searched={searchValue}/>}
        renderToDos={tarea => (
          <ToDoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            completeToDos={() => {completeToDos(tarea.text)}}
            deleteToDos={() => {deleteToDos(tarea.text)}}
          /> 
        )}
      />

      {!!openModal && (
        <Modal>
          <ToDoForm f
            addToDo={addToDo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ToDoAddButton 
        setOpenModal={setOpenModal}
      />
    </div>
  )
}

export default App;
