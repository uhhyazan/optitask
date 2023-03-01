    
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

interface Props {
  task: {
    id: number
    title: string
    isComplete: boolean
    date: Date
  }
  index: number
}

const TaskPreview: React.FC<Props> = ({ task, index}) => {
    return (    
      <Card >
        <CardContent >
          <Typography variant="h6" style={{ textDecoration: task.isComplete ? "line-through" : "", wordBreak: 'break-word' }}>
            {task.title}
          </Typography>
        </CardContent>
      </Card> 
    )
  }

export default TaskPreview