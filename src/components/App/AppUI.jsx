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
import { ToDosLoading } from '../ToDosLoading/ToDosLoading'
import { EmptyToDos } from '../EmptyToDos/EmptyToDos';

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

        {loading && <ToDosLoading />}
        
        {(!loading && searchedToDos.length === 0) && <EmptyToDos />}

        {error && <ToDosError />}

        {searchedToDos.map(tarea => (
          <ToDoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            completeToDos={() => {completeToDos(tarea.text)}}
            deleteToDos={() => {deleteToDos(tarea.text)}}
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