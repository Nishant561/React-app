import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'

function App() {
 

  const data = [
    {para:'lorem hhshddhjds' , head:'Nishant'},
    {para:'lorem hhshddhjds' , head:'sujata'},
    {para:'lorem hhshddhjds' , head:'nisha'},
  ]

  return (
   <>
      <div className='h-screen w-screen bg-slate-800 overflow-x-hidden'>
            <div className='w-full relative'>
                {
                  data.map((item,index)=>(
                    <Products val={item}  count={index} />
                  ))
                }

                <div className='absolute w-full h-full top-0 bg-red-500'>


                </div>
            </div>
      </div>
    
   </>
  )
}

export default App
