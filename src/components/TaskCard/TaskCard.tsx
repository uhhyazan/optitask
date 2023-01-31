import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React from 'react';

interface Props {
  task: {
    title: string;
    completed: boolean;
  };
  index: number;
  completeTask: (index: number) => void;
}

const TaskCard: React.FC<Props> = ({ task, index, completeTask }) => {
    return (
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.title}
          </Typography>
          <Button onClick={() => completeTask(index)} variant='text'>Complete</Button>
        </CardContent>
      </Card>
    );
  };

export default TaskCard;