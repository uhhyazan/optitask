import { Paper } from '@mui/material'
import React from 'react'
import TaskCard from './TaskCard/TaskCard'
import Title from './Title'

type CompletedProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
    handleUncompleteClick: (index: number) => void
    handleDeleteClick: (index: number) => void
}

const Completed: React.FC<CompletedProps> = ({tasks, handleUncompleteClick, handleDeleteClick}) => {
    return (
        <>
        <Paper elevation={2} className='m-3 bg-slate-100'>
            <div className=''>
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
            </Paper>
        </>
    )
}

export default Completed