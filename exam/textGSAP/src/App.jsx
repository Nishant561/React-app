import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'

function App() {
  const text = useRef();

  useGSAP(()=>{
    gsap.from('.hero span', {
      y: 150,
      duration: 1,
      delay: 1,
      opacity:0,
      stagger:.5
      
    });
  })

  return (
    <>
      <div className="main w-screen h-screen flex items-center justify-center bg-black">
        <div className='overflow-hidden hero'>
          <span ref={text}  className='text-white hero text-9xl font-semibold'>
            N
          </span>
          <span ref={text}  className='text-white hero text-9xl font-semibold'>
            i
          </span>
          
        </div>
      </div>
    </>
  );
}

export default App;
