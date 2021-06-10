import React, { useContext } from 'react'
import Skeleton from 'react-skeleton-loader'
import { TaskContext } from '../context/context'

const TaskList = () => {
  const { tasks, loading, removeTask, updateCompleted } =
    useContext(TaskContext)

  return (
    <>
      <h1>TaskList</h1>
      {loading && <Skeleton count={10} width='250px' />}
      <ul className='list-group'>
        {tasks.map(({ id, title, desc, completed }) => {
          return (
            <li
              className='list-group-item d-flex justify-content-between '
              key={id}
            >
              <div className=''>
                {title} {completed && <span>✅</span>}
              </div>
              <button
                onClick={() => updateCompleted(id)}
                className='btn btn-link'
              >
                Complet
              </button>
              <button onClick={() => removeTask(id)} className='btn btn-link'>
                remove
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TaskList
