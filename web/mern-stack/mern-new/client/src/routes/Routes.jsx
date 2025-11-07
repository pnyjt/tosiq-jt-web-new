import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotesList from '../pages/notes/NotesList'
import CreateNote from '../pages/notes/CreateNote'

const Routes = () => {

    const notesRoute = createBrowserRouter([
        { path: '/' , element: <NotesList /> },
        { path: '/notes/create' , element: <CreateNote /> }
    ])

    return (
        <RouterProvider router={notesRoute} />
    )
}

export default Routes