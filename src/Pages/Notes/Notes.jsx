import React from 'react'
import NoteCard from '../../components/NoteCard'
import { Container, Grid } from '@material-ui/core'
import Masonry from 'react-masonry-css'

import useFetch from '../../useFetch'

const Notes = () => {
    

  const {notes, ispending, error}=useFetch('http://localhost:8000/notes')

  const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
            {ispending && <div>loading....</div>}
            {error && <div> {error}</div>}
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
            {/* <Grid container spacing={3}> */}
                {notes.map((note) => (
                    // <Grid key={note.id} item xs={12} md={6} lg={4}>
                    <div key={note.id}>
                        <NoteCard note={note}/>
                    </div>
                ))}
                </Masonry>
            {/* </Grid> */}
        </Container>
    )
}

export default Notes
