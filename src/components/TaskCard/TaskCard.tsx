import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import React from 'react';

interface Props {
  task: {
    id: number
    title: string
    isComplete: boolean
    date: Date
  }
  index: number
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
}

const TaskCard: React.FC<Props> = ({ task, index, onClickComplete, onClickDelete }) => {
    return (    
      <Card className='m-5 max-w-full'>
        <CardContent className='relative'>
          <Button className="absolute top-0 right-0 p-1" 
          onClick={() => onClickDelete(index)}>X</Button>

          <Typography variant="h5" style={{ textDecoration: task.isComplete ? "line-through" : "", wordBreak: 'break-word' }}>
            {task.title}
          </Typography>
          <div className='flex'>
            <h5 className='justify-left'>
              Due: {task.date.toDateString()}
            </h5>
            {!task.isComplete &&
              <Button onClick={() => onClickComplete(index)} variant='text' className='justify-right'>Complete</Button>
            }
            {task.isComplete &&
              <Button onClick={() => onClickComplete(index)} variant='text'>Uncomplete</Button>
            }
          </div>
        </CardContent>
      </Card> 
    );
  };

export default TaskCard;