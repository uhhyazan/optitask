import React, { useState } from 'react'
import Title from './Title'
import TaskCalendar from './TaskCalendar'
import { Box, List, ListItem, Typography } from '@mui/material'
import daysOfWeek from '../data/data'

import { columnStyling, containerContentStyling } from './styling/styling'


type CalendarProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
}

const CalendarColumn: React.FC<CalendarProps> = ({tasks}) => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.date)
        return (
            taskDate.getFullYear() === selectedDate.getFullYear() &&
            taskDate.getMonth() === selectedDate.getMonth() &&
            taskDate.getDate() === selectedDate.getDate()
        )
    })


    return (
        <>
        <Box sx={columnStyling}>
            <Title children={'Calendar'} />
            <Box sx={{ justifyContent: 'center', display: 'flex', mb: 2 }}>
              <TaskCalendar tasks={tasks} onChange={setSelectedDate} value={selectedDate} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'medium', textAlign: 'center', mb: 2 }}>
              Tasks for {daysOfWeek[selectedDate.getDay()]},{' '}
              {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}:
            </Typography>
            <Box sx={containerContentStyling}>
              <List sx={{display: 'block'}}>
                {filteredTasks.map((task) => (
                  <ListItem>
                    <Typography variant='h6' sx={{ mr: 1 }}>&#x2022;</Typography>
                    <Typography variant='h6' sx={{textDecoration: task.isComplete ? "line-through" : ""}}>{task.title}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
        </Box>
      </>
    )
  }

export default CalendarColumn