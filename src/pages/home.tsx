import React, { useState } from 'react'
import ToDo from '../components/Boards/ToDo';
import Calendar from '../components/Calendar';
import Completed from '../components/Completed';

interface Task {
  id: number,
  title: string;
  isComplete: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [id, setId] = useState<number>(0);

  const addTask = (title: string) => {
    setTasks([...tasks, { id, title, isComplete: false }])
    setId(id + 1);
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

  const toDoTasks = tasks.filter(task => !task.isComplete)
  const completedTasks = tasks.filter(task => task.isComplete)

    return (
      <div className='flex justify-between'>
        <ToDo tasks={toDoTasks} handleCompleteClick={handleCompleteClick} handleUncompleteClick={handleUncompleteClick} addTask={addTask}/>
        <Completed tasks={completedTasks} handleCompleteClick={handleCompleteClick} handleUncompleteClick={handleUncompleteClick} />
        <Calendar />
      </div>
    );
  }
  
  export default Home