import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Title from './Title'
import Calendar from 'react-calendar'
import TaskPreview from './TaskPreview'

type CalendarProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
}


const CalendarColumn: React.FC<CalendarProps> = ({tasks}) => {
    const [date, setDate] = useState(new Date())

    return (
        <>
            <div className='border-2 col-span-1 w-1/3'>
            <Title>Calendar</Title>
                <div className="calendar-container">
                    <Calendar onChange={setDate} value={date}/>
                </div>
                <div className="text-center">
                    Selected date: {date.toDateString()}
                </div>
                <div id='tasks' className='ml-3'>
                    {tasks.filter(task => {
                        const taskDate = new Date(task.date);
                        return (
                            taskDate.getFullYear() === date.getFullYear() &&
                            taskDate.getMonth() === date.getMonth() &&
                            taskDate.getDate() === date.getDate()
                        );
                        }).map((task) => (
                        <TaskPreview
                            task={task}
                            index={task.id}
                         />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CalendarColumn