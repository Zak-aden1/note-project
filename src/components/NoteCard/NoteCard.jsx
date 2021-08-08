import React from 'react'
import { Card, CardHeader, CardContent, Typography, IconButton  } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { identifier } from '@babel/types'

const NoteCard = ({note}) => {
    const handleDelete = (e) => {
        e.preventDefault()

        // fetch('http://localhost:8000/notes/' + id, {
        //     method: 'DELETE'
        // })
    }
    return (
        <div>
            <Card elevation={8}>
                <CardHeader 
                
                title={note.title}
                subheader={note.category}
                action={
                    <IconButton onClick={() => {console.log(note.title, 'delete');}}>
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
