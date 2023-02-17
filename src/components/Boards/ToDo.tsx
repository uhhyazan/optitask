import {  Button, Paper } from '@mui/material'
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
        }
    }

    return (
        <>
            <Paper elevation={2} className='m-3 bg-slate-100' sx={{position: 'relative'}}>
                <div className='border-2'>
                    <Title children={'To-Do'}/>                    
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
                    <Button 
                        onClick={handleOpen}
                        variant='outlined'
                        sx={buttonStyling}
                    >
                        Add Task +
                    </Button>
                    <CreateTask addTask={addTask} open={open} handleClose={handleClose}/>
                </div>
            </Paper>
        </>
    )
}

export default ToDo