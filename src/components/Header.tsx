import { AppBar, Toolbar, Typography } from '@mui/material'
import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <AppBar position="static" sx={{
      background:'white',
      position:'relative',
      margin: 0,
      opacity: 0.8,
      zIndex: 2,
    }}>
      <Toolbar >
        <Typography variant="h4" component="h1" sx={{ opacity: 1, fontWeight: 'bold', color: 'black' }}>
          OPTITASK
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header