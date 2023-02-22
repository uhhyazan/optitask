import {  Box, Button, Paper } from '@mui/material'
import React from 'react'
import CreateTask from './CreateTask'
import TaskCard from './TaskCard'
import Title from './Title'

type TodoProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
    handleCompleteClick: (id: number) => void,
    handleDeleteClick: (index: number) => void,
    addTask: (title: string, date: Date) => void,
    editTask: (id: number, updatedTitle: string, updatedDate: Date) => void
}

const ToDo: React.FC<TodoProps> = ({tasks, handleCompleteClick, handleDeleteClick, addTask, editTask }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const buttonStyling = {
        fontWeight: 'bold',
        p: 2,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#C7D2FE',
        color: 'black',
        '&:hover': {
          background: "#6366F1",
          color: 'white'
        },
        borderRadius: 4,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      }
    
      const columnStyling = {
        minWidth: '400px',
        minHeight: 'calc(100vh - 300px)',
        maxHeight: '100vh',
        position: 'relative',
        margin: 2,
        background:'#F5F5F4',
        borderRadius: 4,
        overflowY: 'auto'
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
    
      const tasksBoxStyling = {
        flexGrow: 1,
        position: 'relative',
        maxHeight: 'calc(100vh - 180px)',
        '@media (min-width: 600px)': {
          flexGrow: 2,
          maxHeight: 'none',
        },
        overflow: 'auto'
      }

    return (
        <>
            <Paper className="column" elevation={2} sx={{...columnStyling, ...responsiveStyling }}>
                <Box >
                    <Title children={'To-Do'}/>                    
                    <Box sx={tasksBoxStyling} id='tasks'>
                        {tasks.map((task) => (
                            <TaskCard 
                                task={task}
                                index={task.id}
                                key={task.id}
                                onClickComplete={handleCompleteClick}
                                onClickDelete={handleDeleteClick}
                                editTask={editTask}
                            />
                        ))}
                    </Box>
                    <Button 
                        onClick={handleOpen}
                        variant='outlined'
                        sx={buttonStyling}
                    >
                        Add Task +
                    </Button>
                    <CreateTask addTask={addTask} open={open} handleClose={handleClose}/>
                </Box>
            </Paper>
        </>
    )
}

export default ToDo