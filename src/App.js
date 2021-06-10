import React from 'react'
import TaskList from './components/TaskList'
import Form from './components/Form'
import { TaskProvider } from './context/context'

const App = () => {
  return (
    <main className='container mt-5'>
      <h1 className='display-2'>Task List</h1>

      <TaskProvider>
        <Form />
        <TaskList />
      </TaskProvider>
    </main>
  )
}

export default App
