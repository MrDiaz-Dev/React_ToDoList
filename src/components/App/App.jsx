import React from "react";
import { AppUI } from './AppUI'
import { ToDoProvider } from '../ToDoContext/ToDoContext'


const App = () => {
  
  return (

    <ToDoProvider>
      <AppUI />
    </ToDoProvider>

  )
}

export default App;
