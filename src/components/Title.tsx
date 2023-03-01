import { Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

const styling = {
   color: 'Black',
   width: '100%', 
   fontWeight: 'bold', 
   mb: 1,
   pb:0 , 
   display: 'flex', 
   justifyContent: 'Left',
   ml: 2,
   mt: 1,
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