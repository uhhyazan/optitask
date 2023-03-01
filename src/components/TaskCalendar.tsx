import Calendar, { CalendarTileProperties } from "react-calendar"
import '../Calendar.css'


type TaskCalendarProps = {
    tasks: { date: Date }[],
    onChange: (date: Date) => void,
    value: Date,
}

const TaskCalendar: React.FC<TaskCalendarProps> = ({tasks, onChange, value}) => {
    const highlightTasks = ({date}: CalendarTileProperties) => {
        const dateString = date.toDateString()
        return tasks.some(task => task.date.toDateString() === dateString)
            ? 'highlighted'
            : ''
    }

    return (
        <Calendar 
            onChange={onChange} 
            value={value} 
            tileClassName={highlightTasks} 
            calendarType="US"
        />
    )
}

export default TaskCalendar