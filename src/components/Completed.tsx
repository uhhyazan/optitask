import { Box, Paper } from '@mui/material'
import React from 'react'
import TaskCard from './TaskCard'
import Title from './Title'
import '../index.css'

type CompletedProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
    handleUncompleteClick: (index: number) => void
    handleDeleteClick: (index: number) => void
    editTask: (id: number, updatedTitle: string, updatedDate: Date) => void
}

const columnStyling = {
    minWidth: '400px',
    minHeight: 'calc(100vh - 300px)',
    position: 'relative',
    margin: 2,
    background:'#F5F5F4',
    borderRadius: 4,
  }

  const responsiveStyling = {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 600px)': {
      flexDirection: 'row',
      alignItems: 'stretch',
      height: 'auto',
    },
  }

const Completed: React.FC<CompletedProps> = ({tasks, handleUncompleteClick, handleDeleteClick, editTask}) => {
    return (
        <>
        <Paper elevation={2} sx={{...columnStyling, ...responsiveStyling}}>
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
                            editTask={editTask}
                         />
                    ))}
                </Box>
            </Box>
            </Paper>
        </>
    )
}

export default Completed