import { Card, Paper, TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'

const CreateTask = ({ addTask }: {addTask: any}) => {
    const [value, setValue] = useState("")
    const [selectedDate, setSelectedDate] = useState(new Date())

    const placeholders = [
        'Walk the dog',
        'Go to the dentist',
        'Lunch with Bob',
        'Build a task app',
        'Find Atlantis'
    ];
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    const placeholder = placeholders[randomIndex];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value) return;
        addTask(value, selectedDate);
        setValue("")
        setSelectedDate(new Date())
    }

    return (
        <>
        <Paper elevation={5}>
            <div className='px-4 py-5 sm:gap-4 sm:px-6'>
                <h3 className='text-center'>Add a New Task</h3>
                <form onSubmit={handleSubmit} className=' ml-4'>
                    <TextField
                        type="text"
                        value={value}
                        label="Task Name"
                        placeholder={placeholder}
                        onChange={(e) => setValue(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <DesktopDatePicker
                        className='mt-5'
                        label="Complete By"
                        renderInput={(params: any) => <TextField {...params} />}
                        value={selectedDate}
                        onChange={(newDate: Date | null) => {
                            if(newDate){
                                setSelectedDate(newDate)
                            }
                        }}
                    />
                    <button 
                        className='mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' 
                        type="submit"
                    >
                            Add
                    </button>
                </form>
            </div>
            </Paper>
        </>
    )
}

export default CreateTask