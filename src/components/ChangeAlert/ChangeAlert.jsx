import { Fragment } from 'react';
import './ChangeAlert.css'
import { useStorageAlert } from "./useStorageListener";

const ChangeAlert = ({ sincronize, storageChange, setStorageChange }) => { 

  const { show, toggleShow } = useStorageAlert(sincronize, storageChange, setStorageChange)

  if (!!show) {
    return (
      <Fragment>
        <br />
        <br />
        <br />
        <div className='ChangeAlert-container'>
          <p>Atencion! Parece que han cambiado la informacion desde otra ventana</p>
          <p>Haga click aqui para refrescar y visualizar los cambios:</p>
          <button
            className='ChangeAlert-button'
            type="button"
            onClick={() => {
              toggleShow();
            }}
          > Recargar </button>
        </div>
      </Fragment>
    );
  }

  return null
}

export { ChangeAlert }