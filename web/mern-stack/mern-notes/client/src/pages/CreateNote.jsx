import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router'
import { CREATE_NOTE } from '../resources/api'

const CreateNote = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const handleSaveNote = async (data) => {
    if (!data.title) {
      toast.error("Title field is required!")
      return;
    } else if (!data.description) {
      toast.error("Description field is required!")
      return;
    }
    
    // code to send data from client to server
    setIsLoading(true)
    try {
      const result = await axios.post(CREATE_NOTE, data);
      if (result) {
        toast.success("Data added successfully.")
        navigate("/")
      } else {
        toast.error("Failed to save note.")
      }
    } catch (error) {
        toast.error("Something went wrong")      
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <div className='shadow p-4 rounded flex items-center justify-between'>
        <div> Create Note </div>
        <div>
          <NavLink to={'/'} className="rounded bg-blue-200 px-4 py-2">All Notes</NavLink>
        </div>
      </div>
      <div className='my-4'>
        <div className='max-w-xl shadow p-4 rounded'>
          <form onSubmit={handleSubmit(handleSaveNote)}>
            <div>
              <label className='block' htmlFor="">Title</label>
              <input { ...register("title") } className='rounded p-3 w-full shadow' type="text" placeholder='Enter note title' />
            </div>
            <div className='my-3'>
              <label className='block' htmlFor="">Description</label>
              <textarea { ...register("description") } className='rounded p-3 w-full shadow' placeholder='Enter note description'></textarea>
            </div>

            <div>
              { isLoading ?
              <button className="cursor-not-allowed rounded bg-blue-200 px-4 py-2" disabled>Saving...</button> :
              <button className="cursor-pointer rounded bg-blue-200 px-4 py-2">Save note</button> 

              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateNote