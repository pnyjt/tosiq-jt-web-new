import axios from 'axios'
import React from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { NavLink } from 'react-router'
import { DELETE_NOTE } from '../resources/apis'
import toast from 'react-hot-toast'

export const NotesItem = ({ note, setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure your want to delete this?")) return;

    try {
      const response = await axios.delete(`${DELETE_NOTE}/${id}`);
      if (response.data.status == true) {
        toast.success(response.data.message);
        setNotes((prev) => prev.filter(note => note._id !== id))
      } else {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  return (
    <div className='hover:shadow-lg border-2 bg-white border-gray-500 p-4 rounded-lg'>
    <div className='text-lg'>{note.title}</div>
    <div className='text-sm text-gray-500'>{note.description}</div>

    <div className='flex justify-end'>
      <div className='p-2 rounded w-fit mt-4 flex gap-4 bg-gray-200 items-center justify-end'>
      <NavLink to={`/notes/update/${note._id}`}><FaRegEdit /></NavLink>
      <button onClick={(e) => handleDelete(e, note._id)} className='cursor-pointer'><FaRegTrashAlt /></button>
    </div>
    </div>
    </div>
  )
}
