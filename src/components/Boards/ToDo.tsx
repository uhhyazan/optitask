import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import TaskCard from '../TaskCard/TaskCard'
import Title from '../Title'

type Props = {}

interface Task {
    title: string;
    completed: boolean;
  }

const CreateTask = ({ addTask }: {addTask: any}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='flex justify-center mt-5 mb-5'>
                <TextField
                    type="text"
                    value={value}
                    placeholder="Add a new task"
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            
        </>
    );
}

const ToDo = (props: Props) => {

    const [tasks, setTasks] = useState<Task[]>([])
    
    const addTask = (title: string) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
      };

    const completeTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    return (
        <>
            <div className='border-2 w-1/3 '>
                <Title children='To-Do' />
                <div id='tasks' className='ml-3 '>
                    {tasks.map((task, index) => (
                        <TaskCard 
                            task={task}
                            index={index}
                            key={index}
                            completeTask={completeTask}
                         />
                    ))}
                </div>
                <div>
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        </>
    )
}

export default ToDo