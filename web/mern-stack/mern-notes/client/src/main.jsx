import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './routes/Routes'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <>

    <Toaster />
    <div className='p-5'>
      <Routes />
    </div>
  </>,
)
