import { Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import CreateTask from '../CreateTask'
import TaskCard from '../TaskCard/TaskCard'
import Title from '../Title'

type TodoProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
    handleCompleteClick: (id: number) => void,
    handleDeleteClick: (index: number) => void,
    addTask: (title: string, date: Date) => void
}

const ToDo: React.FC<TodoProps> = ({tasks, handleCompleteClick, handleDeleteClick, addTask }) => {
    const [showCreateTask, setShowCreateTask] = useState(false)

    return (
        <>
            <Paper elevation={2} className='m-3 bg-slate-100'>
                <div className='border-2'>
                    <Title children='To-Do' />                
                    <div>
                        {showCreateTask && <CreateTask addTask={addTask} />}
                    </div>
                    <div id='tasks'>
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
                        <Button 
                            className='text-center font-bold py-2 px-4 '
                            onClick={() => setShowCreateTask(!showCreateTask)}
                        >
                            Add Task +
                        </Button>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default ToDo