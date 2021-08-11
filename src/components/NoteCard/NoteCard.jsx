import React from 'react'
import { useState } from 'react'
import { Card, CardHeader, CardContent, Typography, IconButton, makeStyles, Avatar  } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { blue, green, pink, red } from '@material-ui/core/colors'


    const useStyles = makeStyles((note) => {
        return {
            test: {
            color: (note) => {
                if(note.category == 'work') {
                    return red[700]
                }
            }
        },
            avColor: {
                backgroundColor: (note) => {
                    if(note.category == 'work') {
                        return red[700]
                    }
                    if(note.category == 'shopping') {
                        return green[500]
                    }
                    if(note.category == 'todos') {
                        return pink[500]
                    }
                    return blue[500]
                }
            }
        }
        
    })

const NoteCard = ({note, handleDelete}) => {
    // const [avLetter, setAvLetter] =useState()
    const [test, setTest] =useState(true)

    const classes = useStyles(note)

    


    
    return (
        <div>
            <Card elevation={8} className={classes.test}>
                <CardHeader 
                avatar={
                    <Avatar className={classes.avColor}>
                        {note.category.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={note.title}
                subheader={note.category}
                action={
                    <IconButton onClick={() => {handleDelete(note.id)}}>
                        <DeleteOutlined />
                    </IconButton>
                }
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>{note.details}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
