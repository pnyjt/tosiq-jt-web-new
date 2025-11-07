import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './routes/Routes'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Top */}
      <div
        className="fixed inset-0 -z-1"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
        }}
      />
      {/* Your Content/Components */}
      <Routes />
    </div>
  </StrictMode>,
)
