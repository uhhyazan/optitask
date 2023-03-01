import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box, Button, Popover } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import React, { useState } from 'react'
import EditTask from './EditTask'
import Task from '../data/types'


interface Props {
  task: Task
  index: number
  onClickComplete: (index: number) => void
  onClickDelete: (index: number) => void
  editTask: (id: number, updatedTitle: string, updatedDate: Date) => void
}

const TaskCard: React.FC<Props> = ({ task, index, onClickComplete, onClickDelete, editTask }) => {
  const buttonText = {
    uncomplete: "Mark as To-Do",
    complete: "Mark as Complete"
  }

  const taskCardStyling = {
    minWidth: '80%',
    m: 1
  }

  const deleteButtonStyling = {
    position: 'absolute', 
    top: 0, 
    right: 0, 
    p: 1
  }
  
  const popoverOptionStyling = {
    justifyContent: 'left',
    alignContent: 'left',
    width: 1
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false)

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const handleEditTaskOpen = () => {
    setIsEditTaskOpen(true)
  }
  const handleEditTaskClose = () => {
    setIsEditTaskOpen(false)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
      <Card sx={ taskCardStyling }>
        <CardContent sx={{ position: 'relative' }}>
          <Button sx={deleteButtonStyling} onClick={handlePopoverClick}>...</Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2}}>
              {task.isComplete ? (<></>) : ( 
                <Button onClick={() => {
                  handlePopoverClose()
                  handleEditTaskOpen()
                }} sx={popoverOptionStyling}>
                  <EditIcon />
                  Edit
                </Button> 
              )}
              <Button onClick={() => {
                handlePopoverClose()
                onClickDelete(index)
              }} sx={popoverOptionStyling}>
                <DeleteIcon />
                Delete
              </Button>
            </Box>
          </Popover>
            
          <Typography variant="h6" sx={{ textDecoration: task.isComplete ? "line-through" : "", wordBreak: 'break-word' }}>
            {task.title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant='subtitle1'>
              Complete by: {task.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </Typography>
            {task.isComplete ? (
              <Button onClick={() => onClickComplete(index)} variant='text'>{buttonText.uncomplete}</Button>
            ) : (
              <Button onClick={() => onClickComplete(index)} variant='text'>{buttonText.complete}</Button>
            )}
          </Box>
          {isEditTaskOpen && (
            <EditTask
              task={task}
              editTask={editTask}
              open={isEditTaskOpen}
              handleClose={handleEditTaskClose}
            />
          )}
        </CardContent>
      </Card>
    )
}

export default TaskCard