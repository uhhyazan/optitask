import { Box, Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import TaskModal from '../TaskModal/TaskModal'

type Props = {}

const ToDo = (props: Props) => {
    
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }



    return (
        <div>
            <Button variant='outlined' onClick={handleOpen}>+</Button>
            <TaskModal open={open} onClose={handleClose} />
        </div>
    )
}

export default ToDo