import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Title from './Title'

type Props = {}


const Calendar = (props: Props) => {


    return (
        <>
            <div className='border-2 col-span-1 w-1/3'>
                <Title children='Calendar' />
                <div id='tasks'>
                </div>
            </div>
        </>
    )
}

export default Calendar