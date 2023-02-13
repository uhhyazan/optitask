import React from 'react'
import CreateTask from '../CreateTask'
import TaskCard from '../TaskCard/TaskCard'
import Title from '../Title'

type TodoProps = {
    tasks: { id: number, title: string, date: Date, isComplete: boolean }[],
    handleCompleteClick: (id: number) => void,
    handleDeleteClick: (index: number) => void,
    addTask: (title: string, date: Date) => void
}

const ToDo: React.FC<TodoProps> = ({tasks, handleCompleteClick, handleDeleteClick, addTask }) => {
    return (
        <>
            <div className='border-2'>
                <Title children='To-Do' />
                <div id='tasks' className='ml-3'>
                    {tasks.map((task) => (
                        <TaskCard 
                            task={task}
                            index={task.id}
                            key={task.id}
                            onClickComplete={handleCompleteClick}
                            onClickDelete={handleDeleteClick}
                         />
                    ))}
                </div>
                <div>
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        </>
    )
}

export default ToDo