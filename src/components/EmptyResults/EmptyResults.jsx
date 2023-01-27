
import '../EmptyToDos/EmptyToDos.css'

const EmptyResults = ({ searched }) => {
  return (
    <div className='creatodo'>
      <h3>
        Sin Coincidencias con '{searched}'
      </h3>
    </div>
  )
}

export {EmptyResults};