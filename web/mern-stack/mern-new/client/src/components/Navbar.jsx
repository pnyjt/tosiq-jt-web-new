import React from 'react'
import { APP_NAME } from '../resources/strings'

export const Navbar = ( { children } ) => {
  return (
    <nav className='p-4 rounded-xl max-w-96 my-4 mx-auto flex items-center justify-between bg-gray-200'>
        <div>{APP_NAME}</div>
        { children }
    </nav>
  )
}
