import React from 'react'

import { Checkbox, Container, FormControl, FormControlLabel, FormLabel, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { Radio, RadioGroup } from '@material-ui/core';
import { Category } from '@material-ui/icons';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

const Create = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails ] = useState('')
    const [category, setCategory] = useState('work')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError ] = useState(false)
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        console.log(details, title, category);
        if(title == '') {
            setTitleError(true)
        }

        if(details == '') {
            setDetailsError(true)
        }
    }

    return (
        <Container>
            <Typography  variant='h6' component='h2' gutterBottom color='textSecondary'>
                Create A New Note
            </Typography>

            <form noValidate onSubmit={handleSubmit}>
            <TextField 
                onChange={(e) => {setTitle(e.target.value)}}
                className={classes.field}
                label='Note Title'
                fullWidth
                color='secondary'
                required
                variant='outlined'
                error={titleError}
                />
            <TextField 
            onChange={(e) => {setDetails(e.target.value)}}
                className={classes.field}
                label='Details'
                variant='outlined'
                color='secondary'
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
            />
            <FormControl className={classes.field}>
            <RadioGroup value={category} onChange={(e) => {setCategory(e.target.value)}}>
                <FormLabel>Note Category</FormLabel>
                <FormControlLabel value='work' control={<Radio/>} label='Work'/>
                <FormControlLabel value='todos' control={<Radio/>} label='Todos'/>
                <FormControlLabel value='reminders' control={<Radio/>} label='Reminders'/>
                <FormControlLabel value='shopping' control={<Radio/>} label='Shopping'/>
            </RadioGroup>
            </FormControl>
    
            <Button endIcon={<ArrowForwardIosOutlinedIcon />}  type='submit' color='secondary' variant='contained'>Submit</Button>
            </form>
        </Container>
    )
}

export default Create
