import React, { useState } from 'react'
import Title from './Title'
import TaskPreview from './TaskPreview'
import TaskCalendar from './TaskCalendar';
import { Paper } from '@mui/material';

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

    return (
        <>
            <Paper elevation={2} className='m-3 bg-slate-100'>
                <div className='border-2'>
                <Title>Calendar</Title>
                    <div className="calendar-container">
                        <TaskCalendar
                            tasks={tasks}
                            onChange={setSelectedDate}
                            value={selectedDate}
                        />
                    </div>
                    <div className="mt-4">
                        <h4 className="text-center font-medium text-med">
                            Tasks for {daysOfWeek[selectedDate.getDay()]}, {selectedDate.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}:
                        </h4>
                        <div id='tasks' className=''>
                            {filteredTasks.map((task) => (
                            <TaskPreview
                                task={task}
                                index={task.id}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default CalendarColumn