import { useEffect, useState } from 'react';
import React from "react";
import { AppUI } from './AppUI'
import { ToDoProvider } from '../ToDoContext/ToDoContext'

// const defaulToDos = [];

// for (let i = 0; i < 20 ; i++) {
//   defaulToDos.push({text: `tarea N${i}`, completed: false});
// }
// let item = JSON.stringify(defaulToDos);
// localStorage.setItem('TODOS_V1', item);


const App = () => {
  
  return (

    <ToDoProvider>
      <AppUI />
    </ToDoProvider>

  )
}

export default App;
