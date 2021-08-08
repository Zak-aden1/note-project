import React from 'react'
import NoteCard from '../../components/NoteCard'
import { Container, Grid, Paper } from '@material-ui/core'

import useFetch from '../../useFetch'

const Notes = () => {
    

  const {notes, ispending, error}=useFetch('http://localhost:8000/notes')

    return (
        <Container>
            {ispending && <div>loading....</div>}
            {error && <div> {error}</div>}

            <Grid container spacing={3}>
                {notes.map((note) => (
                    <Grid key={note.id} item xs={12} md={6} lg={4}>
                    {/* <Paper> <h2 key={note.id}>{note.title}</h2> </Paper> */}
                    <NoteCard note={note}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Notes
