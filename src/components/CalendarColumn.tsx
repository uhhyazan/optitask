import React, { useState } from 'react'
import Title from './Title'
import TaskPreview from './TaskPreview'
import TaskCalendar from './TaskCalendar';

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

    return (
        <>
            <div className='border-2'>
            <Title>Calendar</Title>
                <div className="calendar-container">
                    <TaskCalendar
                        tasks={tasks}
                        onChange={setSelectedDate}
                        value={selectedDate}
                    />
                </div>
                <div className="text-center">
                    Selected date: {selectedDate.toDateString()}
                </div>
                <div id='tasks' className='ml-3'>
                    {filteredTasks.map((task) => (
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