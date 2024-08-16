import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { TodoStore } from './store/TodoStore.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={TodoStore}>

    <App />

  </Provider>
  
)
