import {  Box, Button, Paper } from '@mui/material'
import React from 'react'
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const buttonStyling = {
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
        position: 'relative',
        margin: 2,
        background:'#F5F5F4',
        borderRadius: 4
    }

    return (
        <>
            <Paper className="column" elevation={2} sx={columnStyling}>
                <Box>
                    <Title children={'To-Do'}/>                    
                    <Box id='tasks'>
                        {tasks.map((task) => (
                            <TaskCard 
                                task={task}
                                index={task.id}
                                key={task.id}
                                onClickComplete={handleCompleteClick}
                                onClickDelete={handleDeleteClick}
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