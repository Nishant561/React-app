
import './App.css'
import {NavLink, Route, Routes} from 'react-router-dom'
import User from './components/User'
import Home from './components/Home'
import UserDetails from './components/UserDetails'
function App() {
  

  return (
   <>
    <div className='flex items-center bg-black justify-between px-8 py-4'>
      <div className="text-white">Nishant</div>
      <div className='flex items-center gap-4'>
            <NavLink to='/' className={({isActive})=>`${isActive? 'text-orange-600' : 'text-white'} hover:text-orange-600`}>Home</NavLink>
            <NavLink to='/user' className={({isActive})=>`${isActive? 'text-orange-600' : 'text-white'} hover:text-orange-600 transition-all`}>User</NavLink>
            <NavLink to='/userdetails' className={({isActive})=>`${isActive? 'text-orange-600' : 'text-white'} hover:text-orange-600 transition-all`}>UserDetails</NavLink>
      </div>


    </div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}>
        <Route path='/user/:id' element={<UserDetails/>} />
      </Route> 
      <Route path='/userdetails' element={<UserDetails/>}/>
    </Routes>

   </>
  )
}

export default App
