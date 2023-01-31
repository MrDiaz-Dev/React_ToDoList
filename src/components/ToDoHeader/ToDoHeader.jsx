import { Children, cloneElement } from "react";

const ToDoHeader = ({ children, loading}) => { 
  return (
    <header>
      {Children
        .toArray(children)
        .map(hijo => cloneElement(hijo, { loading : loading }))}
    </header>
  );
}

export { ToDoHeader };

{/* con Children capturamos un arreglo de componentes hijos y con cloneElement clonamos los componentes hijos y podemos insertarles las props del padre */}
