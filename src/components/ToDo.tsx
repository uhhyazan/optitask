import {  Box, Button, List, ListItem } from '@mui/material'
import React from 'react'
import CreateTask from './CreateTask'
import TaskCard from './TaskCard'
import Title from './Title'


import { columnStyling, containerContentStyling, addTaskButtonStyling } from './styling/styling'

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

    return (
        <>
            <Box sx={columnStyling}>
                <Title children={'To-Do'}/> 
                <Box sx={containerContentStyling}>
                    <List>
                        {tasks.map((task) => (
                            <ListItem>
                                <TaskCard 
                                    task={task}
                                    index={task.id}
                                    key={task.id}
                                    onClickComplete={handleCompleteClick}
                                    onClickDelete={handleDeleteClick}
                                    editTask={editTask}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>                    
                <Button 
                    onClick={handleOpen}
                    variant='contained'
                    sx={addTaskButtonStyling}
                >
                    Add Task +
                </Button>
            </Box>
            <CreateTask addTask={addTask} open={open} handleClose={handleClose}/>
        </>
    )
}

export default ToDo