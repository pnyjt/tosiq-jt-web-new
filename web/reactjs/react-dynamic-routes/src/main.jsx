import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blogs from './pages/Blogs.jsx'
import Users from './pages/Users.jsx'
import Help from './pages/Help.jsx'
import UserDetail from './pages/UserDetail.jsx'

const urls = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/users', element: <Users /> },
  { path: '/users/:id', element: <UserDetail /> },
  { path: '/help', element: <Help /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen w-full relative">
      {/* Aurora Dream Vivid Bloom */}
      <div
        className="fixed inset-0 -z-1"
        style={{
          background: `
        radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.85), transparent 68%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.75), transparent 68%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.98), transparent 68%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.3), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
        }}
      />
      <RouterProvider router={urls} />  
    </div>
  </StrictMode>,
)
