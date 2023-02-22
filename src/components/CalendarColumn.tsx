import React, { useState } from 'react'
import Title from './Title'
import TaskPreview from './TaskPreview'
import TaskCalendar from './TaskCalendar';
import { Box, List, ListItem, Paper, Typography } from '@mui/material';
import daysOfWeek from '../data/data';

type CalendarProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
}

const CalendarColumn: React.FC<CalendarProps> = ({tasks}) => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.date);
        return (
            taskDate.getFullYear() === selectedDate.getFullYear() &&
            taskDate.getMonth() === selectedDate.getMonth() &&
            taskDate.getDate() === selectedDate.getDate()
        )
    })

    const columnStyling = {
      minWidth: '400px',
      position: 'relative',
      margin: 2,
      background:'#F5F5F4',
      borderRadius: 4,
    }

    const responsiveStyling = {
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 600px)': {
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 'auto',
      },
    }
  
    const tasksBoxStyling = {
      flexGrow: 1,
      maxHeight: 'calc(100vh - 180px)',
      '@media (min-width: 600px)': {
        flexGrow: 2,
        maxHeight: 'none',
      },
    }

    return (
        <>
        <Paper elevation={2} sx={{...columnStyling, ...responsiveStyling }}>
          <Box sx={tasksBoxStyling}>
            <Title>
              Calendar
            </Title>
            <Box sx={{ justifyContent: 'center', display: 'flex', mb: 2 }}>
              <TaskCalendar tasks={tasks} onChange={setSelectedDate} value={selectedDate} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'medium', textAlign: 'center', mb: 2 }}>
                Tasks for {daysOfWeek[selectedDate.getDay()]},{' '}
                {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}:
              </Typography>
              <Box sx={{display: 'flex', justifyContent: 'center', minHeight: '50vh'}}>
                <List sx={{ width: '100%', maxWidth: 400 }}>
                  {filteredTasks.map((task) => (
                    <ListItem key={task.id} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant='h6' sx={{ mr: 1 }}>&#x2022;</Typography>
                      <Typography variant='h6'>{task.title}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Paper>
      </>
    )
  }

export default CalendarColumn