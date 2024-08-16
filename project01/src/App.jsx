import { useEffect, useState } from "react";

import "./App.css";
import { Link, Routes ,Route, useLocation} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
 const {search , pathname} = useLocation()
 
  return (
    <>
    {
     ( pathname !== '/' || search.length>0) && (<Link to='/' className="absolute left-[17%] top-[3%]">Home</Link>)
    }
        

      <div className="w-screen h-screen flex ">
            
      <Routes>

  <Route path='/' element={<Home/>}/>
  <Route path="/details/:id" element={<Details/>} />
  </Routes>
      </div>



    </>
  );
}

export default App;
