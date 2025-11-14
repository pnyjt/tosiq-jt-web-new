import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotesList from '../pages/notes/NotesList'
import CreateNote from '../pages/notes/CreateNote'
import DetailNote from '../pages/notes/DetailNote'

const Routes = () => {

    // http://localhost:27173/notes/update/3d2f3f43fsfsdfhefh439f34
    const notesRoute = createBrowserRouter([
        { path: '/' , element: <NotesList /> },
        { path: '/notes/create' , element: <CreateNote /> },
        { path: '/notes/update/:id' , element: <DetailNote /> }
    ])

    return (
        <RouterProvider router={notesRoute} />
    )
}

export default Routes