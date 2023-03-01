import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'

interface CreateTaskProps {
    addTask: (title: string, date: Date) => void
    open: boolean
    handleClose: () => void
  }

const CreateTask = ({ addTask, open, handleClose }: CreateTaskProps) => {
    const [value, setValue] = useState("")
    const [selectedDate, setSelectedDate] = useState(new Date())

    const placeholders = [
        'Walk the dog',
        'Go to the dentist',
        'Lunch with Bob',
        'Build a task app',
        'Find Atlantis'
    ]
    const randomIndex = Math.floor(Math.random() * placeholders.length)
    const placeholder = placeholders[randomIndex]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!value) return
        
        addTask(value, selectedDate)

        setValue("")
        setSelectedDate(new Date())
        handleClose()
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4
    }

    const inputStyling = {
        taskStyling: {
            width: '100%'
        },
        dateStyling: {
            width: '75%'
        },
        marginTop: 3
    }

    const titleStyling = {
        textAlign: 'center',
        fontWeight: 'medium',
    }

    const buttonStyling = {
        display: 'block',
        width: '20%',
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
    }

    return (
        <>
            <Modal         
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={titleStyling}>Add a New Task</Typography>
                    <FormControl  sx={{width: '100%'}}>
                        <TextField
                            type="text"
                            value={value}
                            label="Task Name"
                            placeholder={placeholder}
                            onChange={(e) => setValue(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            sx={[inputStyling, inputStyling.taskStyling]}
                        />
                        <Box sx={containerStyle}>
                            <DesktopDatePicker
                                label="Complete By"
                                renderInput={(params: any) => <TextField {...params} sx={[inputStyling, inputStyling.dateStyling]} /> }
                                value={selectedDate}
                                onChange={(newDate: Date | null) => {
                                    if(newDate){
                                        setSelectedDate(newDate)
                                    }
                                }}
                            />
                            <Button variant='contained' onClick={handleSubmit} sx={buttonStyling}>
                                    Add
                            </Button>
                        </Box>
                    </FormControl>
                </Box>
            </Modal>
        </>
    )
}

export default CreateTask