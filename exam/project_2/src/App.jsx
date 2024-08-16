
import { Form, Home ,Nav } from './components/index'
import {NavLink ,Link ,Route ,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
        
       


        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<Form/>} />
    </Routes>

    </>


  )
}

export default App
