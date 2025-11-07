import React from 'react'

export const NotesItem = ({ note }) => {
  return (
    <div className='hover:shadow-lg border-2 bg-white border-gray-500 p-4 rounded-lg'>
    <div className='text-lg'>{note.title}</div>
    <div className='text-sm text-gray-500'>{note.description}</div>
    </div>
  )
}
