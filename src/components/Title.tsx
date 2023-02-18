import { Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

const styling = {
   color: 'Black',
   width: 1, 
   fontWeight: 'bold', 
   mb: 4, 
   display: 'flex', 
   justifyContent: 'Left',
   ml: 2,
   mt: 1,
   text: 'white',
   borderTopLeftRadius: 4,
   borderTopRightRadius: 4 
}

const Title: FC<Props> = ({ children }) => {
   return (
      <Typography variant="h5" sx={styling}>
         {children}
      </Typography>
   )
}

export default Title