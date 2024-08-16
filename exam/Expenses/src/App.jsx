import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header, Balance,Income ,History, Transaction, Button } from './components/index'

function App() {
  

  return (
    <>
        <div className='main-container'>
            <div className='medium-container'>
              <Header />
              <Balance />
              <Income />
              <History />
              <Transaction/>
              
            </div>
        </div>
    
    </>
  )
}

export default App
