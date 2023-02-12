import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'

const CreateTask = ({ addTask }: {addTask: any}) => {
    const [value, setValue] = useState("")
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value) return;
        addTask(value, selectedDate);
        setValue("")
        setSelectedDate(new Date())
        console.log('in handlesubmit')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex justify-center mt-5 mb-5'>
                <TextField
                    type="text"
                    value={value}
                    placeholder="Add a new task"
                    onChange={(e) => setValue(e.target.value)}
                />
                <DesktopDatePicker
                    label="Complete By"
                    renderInput={(params: any) => <TextField {...params} />}
                    value={selectedDate}
                    onChange={(newDate: Date | null) => {
                        if(newDate){
                            setSelectedDate(newDate)
                        }
                    }}
                />
                <button type="submit">Add</button>

            </form>
        </>
    )
}

export default CreateTask