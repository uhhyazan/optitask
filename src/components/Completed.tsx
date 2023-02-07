import { Button, TextField } from '@mui/material'
import React from 'react'
import TaskCard from './TaskCard/TaskCard'
import Title from './Title'

type CompletedProps = {
    tasks: { id: number, title: string, isComplete: boolean }[],
    handleUncompleteClick: (index: number) => void
    handleDeleteClick: (index: number) => void
}

const Completed: React.FC<CompletedProps> = ({tasks, handleUncompleteClick, handleDeleteClick}) => {
    return (
        <>
            <div className='border-2 w-1/3'>
                <Title children='Completed' />
                <div id='tasks' className='ml-3 '>
                    {tasks.map((task) => (
                        <TaskCard 
                            task={task}
                            index={task.id}
                            key={task.id}
                            onClickComplete={handleUncompleteClick}
                            onClickDelete={handleDeleteClick}
                         />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Completed