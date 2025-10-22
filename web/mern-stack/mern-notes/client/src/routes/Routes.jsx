import React from 'react'
import { createBrowserRouter } from 'react-router'
import NotesList from '../pages/NotesList'
import CreateNote from '../pages/CreateNote'
import { RouterProvider } from 'react-router'

const Routes = () => {
    const router = createBrowserRouter([
        { path: '/', element: <NotesList /> },
        { path: '/notes/create', element: <CreateNote /> },
        { path: '*', element: <NotesList /> },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes