import React, { useState, useEffect, createContext } from 'react'
import { db } from '../firebase/config'

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [completed, setCompleted] = useState(false)

  const getAllTasks = () => {
    setLoading(true)
    db.collection('tasks').onSnapshot((snapshot) => {
      const tasklist = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })

      setLoading(false)
      setTasks(tasklist)
    })
  }

  // create
  const createTask = (task) => {
    db.collection('tasks').add(task)
  }

  // delete / remove task
  const removeTask = (id) => {
    // if (window.confirm('Are you Sure ?')) {
    db.collection('tasks').doc(id).delete()
    // }
  }

  // update task
  const updateCompleted = (id) => {
    setCompleted(!completed)
    // update completed in firebase
    db.collection('tasks').doc(id).update({
      completed: completed,
    })
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  const values = { tasks, createTask, loading, removeTask, updateCompleted }

  return <TaskContext.Provider children={children} value={values} />
}

export { TaskProvider, TaskContext }
