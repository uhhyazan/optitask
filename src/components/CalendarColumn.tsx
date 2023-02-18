import React, { useState } from 'react'
import Title from './Title'
import TaskPreview from './TaskPreview'
import TaskCalendar from './TaskCalendar';
import { Box, Paper, Typography } from '@mui/material';

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

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const columnStyling = {
        position: 'relative',
        margin: 2,
        background:'#F5F5F4',
        borderRadius: 4
    }

    return (
        <>
        <Paper elevation={2} sx={columnStyling}>
          <Box>
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
              <Box id="tasks">
                {filteredTasks.map((task) => (
                  <TaskPreview task={task} index={task.id} />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </>
    )
  }

export default CalendarColumn