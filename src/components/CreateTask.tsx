import { TextField } from '@mui/material'
import React, { useState } from 'react'


const CreateTask = ({ addTask }: {addTask: any}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
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
            </form>
            
        </>
    )
}

export default CreateTask