import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/context'

const Task = ({ id, title, completed }) => {
  const { removeTask, updateCompleted } = useContext(TaskContext)

  const [isDeleting, setIsDeleting] = useState(false)

  const taskIsDeleting = () => {
    setIsDeleting(true)
    setTimeout(() => {
      removeTask(id)
      setIsDeleting(false)
    }, 1200)
  }

  return (
    <>
      <li
        style={{ background: isDeleting && 'red' }}
        className='list-group-item d-flex justify-content-between align-items-center'
      >
        <div className=''>
          {completed ? (
            <span className='badge'>✅</span>
          ) : (
            <span className='badge'>❌</span>
          )}
          {title}
        </div>
        <div className=''>
          <button
            onClick={() => updateCompleted(id)}
            className='btn btn-sm btn-link'
          >
            Complet
          </button>
          <button onClick={taskIsDeleting} className='btn btn-sm btn-link'>
            remove
          </button>
        </div>
      </li>
    </>
  )
}

export default Task
