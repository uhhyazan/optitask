import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Title from './Title'

type Props = {}


const Completed = (props: Props) => {
    return (
        <>
            <div className='border-2 w-1/3'>
                <Title children='Completed' />
                <div id='tasks'>
                </div>
            </div>
        </>
    )
}

export default Completed