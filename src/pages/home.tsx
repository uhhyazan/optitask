import { Box } from '@mui/material'
import React, { useState } from 'react'
import ToDo from '../components/Boards/ToDo'
import CalendarColumn from '../components/CalendarColumn'
import Completed from '../components/Completed'
import Header from '../components/Header'

interface Task {
  id: number,
  title: string
  date: Date
  isComplete: boolean
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [id, setId] = useState<number>(0)

  const addTask = (title: string, date: Date) => {
    setTasks([...tasks, { id, title, date, isComplete: false }])
    setId(id + 1)
  }

  const handleCompleteClick = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: true }
      }
      return task
    }))
  }

  const handleUncompleteClick = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: false }
      }
      return task
    }))
  }

  const handleDeleteClick = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toDoTasks = tasks.filter(task => !task.isComplete)
  const completedTasks = tasks.filter(task => task.isComplete)

    return (
      <Box sx={{background:"radial-gradient(at right top, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))"}}>
        <Header />
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: '100vh',  background:"radial-gradient(at right top, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))"}}>
          <ToDo tasks={toDoTasks} handleCompleteClick={handleCompleteClick} handleDeleteClick={handleDeleteClick} addTask={addTask}/>
          <Completed tasks={completedTasks} handleUncompleteClick={handleUncompleteClick} handleDeleteClick={handleDeleteClick} />
          <CalendarColumn tasks={tasks} />
        </Box>
      </Box>
    )
  }
  
  export default Home