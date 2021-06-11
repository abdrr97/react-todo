import React, { useContext } from 'react'
import Skeleton from 'react-skeleton-loader'
import Task from './Task'
import { TaskContext } from '../context/context'

const TaskList = () => {
  const { tasks, loading } = useContext(TaskContext)

  return (
    <>
      <h1>TaskList</h1>
      {loading && <Skeleton count={10} width='250px' />}
      <ul className='list-group'>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
  )
}

export default TaskList
