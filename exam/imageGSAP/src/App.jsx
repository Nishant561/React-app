import { useRef, useState } from "react";
import { gsap } from "gsap";
import {} from "@gsap/react";

function App() {
  const cursor = useRef();
  const image = useRef();
  const text = useRef()
  const handelCursor = (dets) => {
    gsap.to(cursor.current, {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.5,
    });
  };


  const handelImage = (dets)=>{
    text.current.textContent ='view more'

    gsap.to(cursor.current,{
      scale:6,
      duration:.3
    })


  }


  const delhandelImage = (dets)=>{

    text.current.textContent =''
    gsap.to(cursor.current,{
      scale:1,
      duration:.3
    })
  }

  return (
    <>
      <div
        ref={cursor}
        className="w-[8px] z-10 fixed h-[8px] flex justify-center items-center text-center bg-white rounded-full"
      ><p className="text-[3px] text-black leading-[3px]" ref={text}></p></div>

      <div
        onMouseMove={handelCursor}
        className="w-screen flex justify-center items-center h-screen"
      >
        <div onMouseLeave={delhandelImage} onMouseEnter={handelImage} ref={image} className="w-[700px] h-[300px] relative bg-red-400">

          <div className="overlay w-full absolute z-20 h-full bg-transparent "></div>
          <img  className="w-full h-full object-cover object-center" src="https://img.freepik.com/free-photo/background-rain-drops-close-up_23-2148900852.jpg?t=st=1723547195~exp=1723550795~hmac=e1929273783a957751ad14e3aa853075b99a4c75234460b267e372919f6fd742&w=1060" />
        
        </div>
      </div>
    </>
  );
}

export default App;
