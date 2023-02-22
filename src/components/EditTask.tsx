import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'

import React, { useState } from 'react'

interface EditTaskProps {
  task: { id: number, title: string, date: Date }
  editTask: (id: number, title: string, date: Date) => void
  open: boolean
  handleClose: () => void
}

const EditTask = ({ task, editTask, open, handleClose }: EditTaskProps) => {
  const [value, setValue] = useState(task.title);
  const [selectedDate, setSelectedDate] = useState(task.date);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;

    editTask(task.id, value, selectedDate)

    setValue("");
    setSelectedDate(new Date());
    handleClose();
  };

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
  };

  const inputStyling = {
    taskStyling: {
      width: '100%'
    },
    dateStyling: {
      width: '75%'
    },
    marginTop: 3
  };

  const titleStyling = {
    textAlign: 'center',
    fontWeight: 'medium',
  };

  const buttonStyling = {
    display: 'block',
    width: '20%',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={titleStyling}>Edit Task</Typography>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              type="text"
              value={value}
              label="Task Name"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setValue(e.target.value)}
              sx={[inputStyling, inputStyling.taskStyling]}
            />
            <Box sx={containerStyle}>
              <DesktopDatePicker
                label="Complete By"
                renderInput={(params: any) => <TextField {...params} sx={[inputStyling, inputStyling.dateStyling]} />}
                value={selectedDate}
                onChange={(newDate: Date | null) => {
                  if (newDate) {
                    setSelectedDate(newDate)
                  }
                }}
              />
              <Button variant='contained' onClick={handleSubmit} sx={buttonStyling}>
                Save
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Modal>
    </>
  )
}

export default EditTask;
