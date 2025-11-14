import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import toast from 'react-hot-toast';
import { NavLink } from 'react-router';
import { ALL_NOTES } from '../../resources/apis';
import axios from 'axios';
import { NotesItem } from '../../components/NotesItem';

const NotesList = () => {
    const [ notes, setNotes ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect( () => {
        const getAllNotes = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(ALL_NOTES)
                if (response.data && response.data.notes) {
                    setNotes(response.data.notes)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        getAllNotes();
    }, [])

  return (
    <>
    <Navbar>
        <NavLink className='rounded p-1 border-2 border-gray-500' to={'/notes/create'}>Create Note</NavLink>
    </Navbar>

    <div className="p-4">
        {
            isLoading ? <div>Loading...</div> :
            notes.length > 0 ?
            <div className='grid grid-cols-12 gap-3'>
                {
                    notes.map( (note, i) => {
                        return (
                            <div key={i} className='max-sm:col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-6'>
                                <NotesItem note={note} setNotes={setNotes} />
                            </div>
                        )
                    })
                }
            </div>
             :
            <div>No records added yet</div>
        }
    </div>
    </>
  )
}

export default NotesList