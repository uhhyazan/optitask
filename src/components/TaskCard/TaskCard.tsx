import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {}

// interface TaskCard{
//   id: number,
//   title: string,
//   status: string,
// }

const TaskCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Complete</Button>
      </CardActions>
    </Card>
  ) 
}

export default TaskCard