import React from 'react'
import { useState } from 'react'
import useFetch from '../../useFetch'

const Notes = () => {
    

  const {notes, ispending, error}=useFetch('http://localhost:8000/notes')

    return (
        <div>
            {ispending && <div>loading....</div>}
            {error && <div> {error}</div>}
            {notes.map((note) => (
                <h2>{note.title}</h2>
            ))}
        </div>
    )
}

export default Notes
