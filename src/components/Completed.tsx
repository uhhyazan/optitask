import { Box, Paper } from '@mui/material'
import React from 'react'
import TaskCard from './TaskCard/TaskCard'
import Title from './Title'
import '../index.css'

type CompletedProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
    handleUncompleteClick: (index: number) => void
    handleDeleteClick: (index: number) => void
}

const columnStyling = {
    position: 'relative',
    margin: 2,
    background:'#F5F5F4',
    borderRadius: 4
}

const Completed: React.FC<CompletedProps> = ({tasks, handleUncompleteClick, handleDeleteClick}) => {
    return (
        <>
        <Paper elevation={2} sx={columnStyling}>
            <Box>
                <Title children='Completed' />
                <Box>
                    {tasks.map((task) => (
                        <TaskCard 
                            task={task}
                            index={task.id}
                            key={task.id}
                            onClickComplete={handleUncompleteClick}
                            onClickDelete={handleDeleteClick}
                         />
                    ))}
                </Box>
            </Box>
            </Paper>
        </>
    )
}

export default Completed