import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PasswordGenerator from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordGenerator/>
  </StrictMode>,
)
