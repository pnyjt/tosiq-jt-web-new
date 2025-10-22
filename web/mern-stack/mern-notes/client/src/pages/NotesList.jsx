import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { NavLink } from 'react-router'
import { ALL_NOTES } from '../resources/api';
import NoteItem from '../components/NoteItem'
import axios from 'axios';
import { GiNotebook } from "react-icons/gi";

const NotesList = () => {

    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getAllNotes = async () => {
            setIsLoading(true)
            try {
                const result = await axios.get(ALL_NOTES)
                if (result.data && result.data.notes) {
                    setNotes(result.data.notes)
                } else {
                    toast.error("Failed to fetch notes")
                }
            } catch (error) {
                toast.error("Something went wrong")
            } finally {
                setIsLoading(false)
            }
        }
        getAllNotes()
    }, [])

    return (
        <>
            <div className='shadow p-4 rounded flex items-center justify-between'>
                <div> Notes List </div>
                <div>
                    <NavLink to={'/notes/create'} className="rounded bg-blue-200 px-4 py-2">Add Note</NavLink> 
                </div>
            </div>
            <div className='my-4'>
                {isLoading ? "Notes is Loading..." :
                notes.length > 0 ?
                <div className='grid grid-cols-12 gap-3'>
                {
                    notes.map((note, i) => {
                        return (
                            <div key={i} className='max-sm:col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-6'>
                                <NoteItem note={note} setNotes={setNotes}/>
                            </div>
                        )
                    })
                }
                </div> : 
                <div className='text-center text-3xl italic'> 
                <div className='grid place-items-center mt-40 mb-12'>
                    <GiNotebook size={96} />
                </div>
                <span>No notes yet in your database </span>
                </div>
                }
            </div>
        </>
    )
}

export default NotesList
