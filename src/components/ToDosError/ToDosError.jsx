import {Fragment} from 'react'

const ToDosError = ({ errorInfo }) => {
  return (
    <Fragment>
      <p>
        Hubo un error, es tiempo para panico:
      </p>
      <p>
        {errorInfo}
      </p>
    </Fragment>
  )
}

export {ToDosError};