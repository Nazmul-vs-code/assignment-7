import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import FriendProvider from './contexts/FriendProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <FriendProvider>

      <App />

    </FriendProvider>

  </StrictMode>
)
