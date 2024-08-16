import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // useGSAP(()=>{
  //   const t1 = gsap.timeline()

  //   t1.to('.box1',{
  //     x:900,
  //     duration:2,
  //     delay:1,
  //     rotate:720,

  //   })
  //   t1.to('.box2',{
  //     x:900,
  //     duration:2,
  //     delay:.5,
  //     rotate:720,

  //   })

  // })

  // useGSAP(()=>{
  //       const t1 = gsap.timeline()

  //       t1.to('h1',{
  //           transform:'translate(-150%)',
  //           scrollTrigger:{
  //             scroller:'body',
  //             markers:true,
  //             trigger:'.box2',
  //             start:'top 0%',
  //             end:'top -100%',
  //             scrub:2,
  //             pin:true,
  //           }
  //       },{scope:'.box2'})

  // })

  {/* second one

     const line = useRef();

  const handleLine = (dets) => {
    const updatedPath = `M 10 80 Q ${dets.clientX} ${dets.clientY} 900 80`;

    gsap.to(line.current, {
      attr: { d: updatedPath },
      duration: 0.5,
      ease: 'power2.out',
    });
  };


  const handleLeave =()=>{
    gsap.to(line.current,{
      attr:{d:"M 10 80 Q 600 80 900 80"},
      duration:1.5,
      ease: "elastic.out(1.2,0.1)"
    })
  }

  */}
 

  const hero = useRef()
  const cursor = useRef()
  const main = useRef()

const handelMove = (dets)=>{
  
  gsap.to(cursor.current , {
    x: dets.clientX,
    y:dets.clientY,
    duration:.5,
  })


}


const handelImage = () => {
  if (hero.current) {
    hero.current.textContent = 'view more';
  }

  gsap.to(cursor.current, {
    scale: 5,
    duration: 0.5,
  });
};

const delhandelImage = () => {
  if (hero.current) {
    hero.current.textContent = '';
  }

  gsap.to(cursor.current, {
    scale: 1,
    duration: 0.5,
  });
};


  return (
    <>
      {/*    This is the first ONe
        <div className="box1 w-[100%] h-[100vh] bg-red-600 "></div>
        <div className="box2 w-[100%] h-[100vh] bg-blue-600 ">
          <h1 className='text-[40vw] '>NIshant</h1>
        </div>
        <div className="box3 w-[100%] h-[100vh] bg-black "></div>
         */}


{/*   second one
 
      <div
      onMouseMove={handleLine}
      onMouseLeave={handleLeave}
      className="string w-[100%] flex items-center justify-center h-[600px] bg-red-500"
    >
      <svg className="" width="1200" height="400">
        <path
          ref={line}
          d="M 10 80 Q 600 80 900 80"
          stroke="black"
          fill="transparent"
        />
      </svg>
    </div>


*/}


<div onMouseMove={handelMove} className="flex items-center justify-center container w-screen h-screen ">
      <div className="w-[700px] relative h-[300px]">
        <div style={{ zIndex: '10' }} className="overlay w-full h-full bg-transparent absolute"></div>
        <img
          onMouseEnter={handelImage}
          onMouseLeave={delhandelImage}
          className="w-full h-full object-cover object-center"
          src="https://img.freepik.com/free-photo/3d-rendering-vibrant-neon-cactus-desert_23-2151244831.jpg?t=st=1723482128~exp=1723485728~hmac=20359eff3021a46010c8cdfbfc0c1423ded45269ee0f437deb753730b580263d&w=1380"
          alt="example"
        />
      </div>
      <div ref={cursor} style={{ zIndex: '9' }} className="cursor w-[10px] flex items-center h-[10px] text-black bg-white text-[10px] rounded-full fixed">
        <p className="text-[3px] text-center" ref={hero}></p>
      </div>
    </div>









    </>
  );
}

export default App;
