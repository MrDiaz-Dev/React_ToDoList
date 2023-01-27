
import { Children, cloneElement } from "react";

const ToDoHeader = ({ children, loading }) => { 
  return (
    <header>
      {Children
        .toArray(children)
        .map(hijo => 
          cloneElement(hijo, { loading }))}
    </header>
  );
}

export { ToDoHeader };