import { Box, Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'

type Props = {
    open: boolean
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const TaskModal = (props: Props) => {

    return (
        <Modal open={props.open} onClose={props.onClose}>       
            <Box sx={style}>
                <TextField id="title-textfield" variant='outlined' label='Task'></TextField>
                <TextField id="description-texfield" variant='outlined' multiline rows={4} label='Description'></TextField>
                <Button variant='contained'>Submit</Button>
            </Box>
             
        </Modal>
    )
}

export default TaskModal