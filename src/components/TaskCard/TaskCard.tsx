import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
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
    <Card sx={{ m: 5, maxWidth: '100%' }}>
      <CardContent sx={{ position: 'relative' }}>
        <Button sx={{ position: 'absolute', top: 0, right: 0, p: 1 }}
          onClick={() => onClickDelete(index)}>X</Button>

        <Typography variant="h5" sx={{ textDecoration: task.isComplete ? "line-through" : "", wordBreak: 'break-word' }}>
          {task.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
          <Typography variant='h5' sx={{ justifySelf: 'left' }}>
            Due: {task.date.toDateString()}
          </Typography>
          {task.isComplete ? (
            <Button onClick={() => onClickComplete(index)} variant='text'>Uncomplete</Button>
          ) : (
            <Button onClick={() => onClickComplete(index)} variant='text'>Complete</Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;