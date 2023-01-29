import { Box, Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import TaskCard from '../TaskCard/TaskCard'

type Props = {}

const CreateTask = ({ addTask }: {addTask: any}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e: any) => {
        console.log('IN HANDLE SUBMIT')
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    value={value}
                    placeholder="Add a new task"
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <Button variant='outlined' onClick={handleSubmit}>+</Button>
        </>
    );
}

const ToDo = (props: Props) => {

    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: false
        }
    ])
    
    const addTask = (title: any) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    return (
        <>
            <div className='border-4'>
                <div id='tasks'>
                    {tasks.map((task) => (
                        <TaskCard task={task.title} />
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