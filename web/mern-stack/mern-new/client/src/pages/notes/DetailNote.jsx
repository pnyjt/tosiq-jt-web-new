import React, { useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { NavLink, useParams } from 'react-router'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { DETAIL_NOTE } from '../../resources/apis';
import toast from 'react-hot-toast';

const DetailNote = () => {
  const params = useParams();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await axios.get(`${DETAIL_NOTE}/${params.id}`);
        if (response.data.status) {
          reset(response.data.note)
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    getNote();
  }, [params.id])

  const handleUpdateNote = async (data) => {

    console.log(data)
  } 
  return (
    <>
    <Navbar>
        <NavLink className='rounded p-1 border-2 border-gray-500' to={'/'}>All Notes</NavLink>
    </Navbar>

    <div className="p-4 mt-3 max-w-xl my-0 mx-auto">
        <div>Detail note ({params.id})</div>
        <div className='mt-3'>
          <form onSubmit={handleSubmit(handleUpdateNote)}>
            <div>
              <label className='block' htmlFor="">Title</label>
              <input { ...register('title')} className='w-full border-2 border-gray-500 p-2 rounded' type="text" placeholder='Enter note title' />
            </div>
            <div className='my-3'>              
              <label className='block' htmlFor="">Description</label>
              <textarea { ...register('description')} className='w-full border-2 border-gray-500 p-2 rounded' placeholder='Enter note title'></textarea>
            </div>
            <div>
              <button className='cursor-pointer rounded p-1 border-2 border-gray-500'>Update</button>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default DetailNote