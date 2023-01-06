// @ts-nocheck
import './App.css';
import React from "react";
import { useContext } from 'react'

//componentes
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoAddButton } from '../ToDoAddButton/ToDoAddButton';
import { ToDoContext } from '../ToDoContext/ToDoContext'
import { Modal } from '../Modal/Modal';
import { ToDoForm } from '../ToDoForm/ToDoForm';

const AppUI = () => {

  const { 
    loading, 
    error, 
    searchedToDos, 
    completeToDos, 
    deleteToDos,
    openModal
  } = useContext(ToDoContext);

  return (
    <div className='app'>
      {/* INCIO DE TO DO PAGE */}

      <ToDoCounter />

      <ToDoSearch />

      <ToDoList>

        {
          loading && 
          <div id="contenedor">
            <div className="loader" id="loader">Loading...</div>
          </div>
        }
        
        {
          (!loading && searchedToDos.length === 0) && 
          
          <div className='creatodo'>
            <h3>
              Crea tu primera Tarea!! :D
            </h3>
          </div>
        }


        {error && <p>Hubo un error, es tiempo para panico</p>}

        {searchedToDos.map(tarea => (
          <ToDoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            completeToDos={completeToDos}
            deleteToDos={deleteToDos}
          /> 
        ))}
      </ToDoList>

      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}

      <ToDoAddButton />
    </div>
  )
}

export {AppUI}