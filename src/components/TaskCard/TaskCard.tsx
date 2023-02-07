import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React from 'react';

interface Props {
  task: {
    id: number;
    title: string;
    isComplete: boolean;
  };
  index: number;
  completeTask: (index: number) => void;
  uncompleteTask: (index: number) => void
}

const TaskCard: React.FC<Props> = ({ task, index, completeTask, uncompleteTask }) => {
    return (
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" style={{ textDecoration: task.isComplete ? "line-through" : "" }}>
            {task.title}
          </Typography>

          {!task.isComplete &&
            <Button onClick={() => completeTask(index)} variant='text'>Complete</Button>
          }
          {task.isComplete &&
            <Button onClick={() => uncompleteTask(index)} variant='text'>Uncomplete</Button>
          }
        </CardContent>
      </Card>
    );
  };

export default TaskCard;