import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/context'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const success = () => toast.success('Added successfully !')
const warning = () => toast.warning('Task is Empty ')

const Form = () => {
  const { createTask } = useContext(TaskContext)
  const [task, setTask] = useState({
    title: '',
    desc: '',
    completed: false,
  })

  const clickHandler = (e) => {
    e.preventDefault()

    if (task.title.trim('') !== '') {
      createTask(task)
      // reset form value
      setTask({
        title: '',
        desc: '',
        completed: false,
      })
      success()
    } else {
      warning()
    }
  }

  return (
    <>
      <h1 className='display-5'>Form</h1>
      <ToastContainer />
      <form className='mb-5'>
        <div className='mb-3'>
          <input
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            placeholder='Title'
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <textarea
            value={task.desc}
            onChange={(e) => setTask({ ...task, desc: e.target.value })}
            type='text'
            placeholder='Description'
            className='form-control'
          ></textarea>
        </div>

        <div className='form-check'>
          <input
            value={task.completed}
            onChange={(e) =>
              setTask({
                ...task,
                completed: !task.completed,
              })
            }
            className='form-check-input'
            id='flexCheckDefault'
            type='checkbox'
          />
          <label className='form-check-label' htmlFor='flexCheckDefault'>
            Completed
          </label>
        </div>

        <button
          type='button'
          onClick={(e) => clickHandler(e)}
          className='btn btn-primary'
        >
          Add Task
        </button>
      </form>
    </>
  )
}

export default Form
