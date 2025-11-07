import React from 'react'
import { Navbar } from '../../components/Navbar'
import { NavLink } from 'react-router'

const CreateNote = () => {
  return (
    <>
    <Navbar>
        <NavLink className='rounded p-1 border-2 border-gray-500' to={'/'}>All Notes</NavLink>
    </Navbar>

    <div className="p-4">
        
    </div>
    </>
  )
}

export default CreateNote