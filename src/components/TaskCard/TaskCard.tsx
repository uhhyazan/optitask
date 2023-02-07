import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React from 'react';
import Home from '../../pages/home';
import { maxHeight } from '@mui/system';

interface Props {
  task: {
    id: number
    title: string
    isComplete: boolean
  }
  index: number
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
}

const TaskCard: React.FC<Props> = ({ task, index, onClickComplete, onClickDelete }) => {
    return (
      <Card className='mb-5 max-w-[300px]'>
        <CardContent className='relative'>
          <Button className="absolute top-0 right-0 p-1" 
          onClick={() => onClickDelete(index)}>X</Button>

          <Typography variant="h6" style={{ textDecoration: task.isComplete ? "line-through" : "", wordBreak: 'break-word' }}>
            {task.title}
          </Typography>

          {!task.isComplete &&
            <Button onClick={() => onClickComplete(index)} variant='text'>Complete</Button>
          }
          {task.isComplete &&
            <Button onClick={() => onClickComplete(index)} variant='text'>Uncomplete</Button>
          }
        </CardContent>
      </Card>
    );
  };

export default TaskCard;