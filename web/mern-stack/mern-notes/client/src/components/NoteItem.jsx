import axios from 'axios';
import moment from 'moment'
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from "react-icons/fa";
import { DELETE_NOTE } from '../resources/api';

const NoteItem = ({ note, setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure your want to delete this note?")) return;
    try {
      const result = await axios.delete(`${DELETE_NOTE}/${id}`)
      if (result) {
        setNotes((prev) => prev.filter((note) => note._id !== id) )
        toast.success("Note deleted successfully")
      } else {
        toast.error("Unable to delete note")
      }
    } catch (error) {
      toast.error("Something went wrong!")
    }
  }
  return (
    <div className='shadow rounded p-3'>
      <div className='text-2xl'>{note.title}</div>
      <div className='mt-3 text-gray-700 h-56 overflow-y-auto'>{note.description}</div>
      <div className='flex items-center justify-between'>
        <div>{moment(note.updatedAt).format('LLL')}</div>
        <div>
          <button className='cursor-pointer' onClick={(e) => handleDelete(e, note._id)}>
            <FaRegTrashAlt color='red' size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteItem