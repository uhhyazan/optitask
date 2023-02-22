import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <AppBar position="static" sx={{
      background:'white',
      position:'relative',
      opacity: 0.8,
      zIndex: 1,
      width:'auto'
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'left', py: 0 }}>
        <Typography variant="h4" component="h1" sx={{ opacity: 1, fontWeight: 'bold', color: 'black' }}>
          OPTITASK
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;