import '../styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import { ThemeProvider } from '@material-tailwind/react'

// ========================================

const el = document.getElementById('approot')
if (el) {
  const root = ReactDOM.createRoot(el)
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}
