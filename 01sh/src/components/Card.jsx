import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

function Card() {

  const [forward , setForward] = useState(false);
  


  return (
    <div
      className="   w-full
                    h-screen
                    flex
                    justify-center
                    items-center
                    bg-zinc-400"
    >
      <div
        className="   w-2/5
                      h-80
                      bg-black
                      rounded-md
                      relative
                      flex
                      overflow-hidden
                     "
      >
        <img className={`w-full
                        h-full
                        object-cover
                        object-center
                        shrink-0
                        tansition-all
                        duration-500
                        
                        ${forward ? "-translate-x-[100%]": "-translate-x-[0%]"}
                      
                        
                        `}
              src="https://images.pexels.com/photos/23669561/pexels-photo-23669561/free-photo-of-man-hiking-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
        />
        <img className={`w-full
                        h-full
                        object-cover
                        object-center
                        shrink-0
                        tansition-all
                        duration-500
                        
                        ${forward ? "-translate-x-[100%]": "-translate-x-[0%]"}

                       
                        
                        `}
              src="https://images.pexels.com/photos/14355039/pexels-photo-14355039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
        />


        <span onClick={()=>{
          console.log("hello world")
          setForward((prev)=> !prev)
        }}
        
        className="absolute
                          bottom-12
                          left-1/2
                          -translate-x-[50%]
                          rounded-full
                          bg-[#dadada7b]
                          cursor-pointer
                          
                          ">
              <IoMdArrowRoundForward color={"white"} size={'2.5rem'} />
        </span>           

      </div>
    </div>
  );
}

export default Card;
