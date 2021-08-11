import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [notes, setNotes] = useState([])
    const [ispending, setIspending] = useState(true)
    const [error, setError] =useState(null)
    useEffect(() => {
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw Error("could not fetch data")
        } else {
            return res.json()
            
        }
    })
    .then(data => {
        setNotes(data)
        setIspending(false)
        setError(null)
    })
    .catch(err => {
        setError(err.message)
        setIspending(false)
    })
    }, [url])
    return {notes, setNotes, ispending, error}
}

export default useFetch
