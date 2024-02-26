import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app-parent'>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </div>
  </React.StrictMode>,
)

export const backendLink = `https://journal-3n7c.onrender.com`;
// export const backendLink = `http://localhost:4000`;
