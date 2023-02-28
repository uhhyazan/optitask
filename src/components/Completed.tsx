import { Box, List, ListItem, Paper } from '@mui/material'
import React from 'react'
import TaskCard from './TaskCard'
import Title from './Title'
import '../index.css'

import { columnStyling, containerContentStyling } from './styling/styling'


type CompletedProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
    handleUncompleteClick: (index: number) => void
    handleDeleteClick: (index: number) => void
    editTask: (id: number, updatedTitle: string, updatedDate: Date) => void
}

const Completed: React.FC<CompletedProps> = ({tasks, handleUncompleteClick, handleDeleteClick, editTask}) => {
    return (
        <>
            <Box sx={columnStyling}>
                <Title children='Completed' />
                <Box sx={containerContentStyling}>
                    <List>
                        {tasks.map((task) => (
                            <ListItem>
                                <TaskCard 
                                    task={task}
                                    index={task.id}
                                    key={task.id}
                                    onClickComplete={handleUncompleteClick}
                                    onClickDelete={handleDeleteClick}
                                    editTask={editTask}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default Completed