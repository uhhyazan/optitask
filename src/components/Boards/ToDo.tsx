import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import CreateTask from '../CreateTask'
import TaskCard from '../TaskCard/TaskCard'
import Title from '../Title'

type TodoProps = {
    tasks: { id: number, title: string, isComplete: boolean }[],
    handleCompleteClick: (id: number) => void,
    handleDeleteClick: (index: number) => void,
    addTask: (title: string) => void
}

const ToDo: React.FC<TodoProps> = ({tasks, handleCompleteClick, handleDeleteClick, addTask }) => {
    return (
        <>
            <div className='border-2 w-1/3'>
                <Title children='To-Do' />
                <div id='tasks' className='ml-3'>
                    {tasks.map((task) => (
                        <TaskCard 
                            task={task}
                            index={task.id}
                            key={task.id}
                            onClickComplete={handleCompleteClick}
                            onClickDelete={handleDeleteClick}
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