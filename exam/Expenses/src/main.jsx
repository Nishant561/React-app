import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Utils from './utils/Utils.jsx'

createRoot(document.getElementById('root')).render(
 <Utils>
   <App />

 </Utils>
  
)
