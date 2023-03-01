import { Typography } from '@mui/material'
import React, { FC } from 'react'

import { footer } from './styling/styling'

const Footer: FC = () => {
  return (
    <Typography sx={footer}>
      &copy; {new Date().getFullYear()} Yazan Musleh. All rights reserved.
    </Typography>
  )
}

export default Footer