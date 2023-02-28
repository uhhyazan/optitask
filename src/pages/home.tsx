import { Box } from '@mui/material'
import React, { useState } from 'react'
import ToDo from '../components/ToDo'
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
  const columnStyling = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: '1fr 1fr 1fr',
    background:
      'radial-gradient(at right top, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
    '@media (min-width: 600px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr',
      alignItems: 'stretch',
      width: '100vw',
      alignContent: 'space-between'
    },
    
  }

  const backgroundStyling = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    background: "radial-gradient(at right top, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
  }

  const [tasks, setTasks] = useState<Task[]>([])
  const [id, setId] = useState<number>(0)

  const addTask = (title: string, date: Date) => {
    setTasks([...tasks, { id, title, date, isComplete: false }])
    setId(id + 1)
  }

  const editTask = (id: number, updatedTitle: string, updatedDate: Date) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, title: updatedTitle, date: updatedDate }
      }
      return task
    }))
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
      <Box>
        <Header />
        <Box sx={backgroundStyling} />
        <Box sx={columnStyling}>
          <ToDo tasks={toDoTasks} handleCompleteClick={handleCompleteClick} handleDeleteClick={handleDeleteClick} addTask={addTask} editTask={editTask}/>
          <Completed tasks={completedTasks} handleUncompleteClick={handleUncompleteClick} handleDeleteClick={handleDeleteClick} editTask={editTask} />
          <CalendarColumn tasks={tasks} />
        </Box>
      </Box>
    )
  }
  
  export default Home