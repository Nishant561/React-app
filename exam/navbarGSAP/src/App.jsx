import { useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { IoMdClose } from "react-icons/io";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const nav = useRef();
  const [player, setPlayer] = useState(true);

  const tl = gsap.timeline({ paused: true });

  useGSAP(() => {
    tl.from(nav.current, {
      x: 1200,
    });

    tl.from(".h1-container h1", {
      x: 100,
      opacity: 0,

      stagger: 0.3,
    });
  });

  const bring = () => {
    tl.play();
  };

  const goBack = () => {
    tl.reverse();
  };

  return (
    <>
      <div
        className="main-container relative w-screen h-screen bg-black bg-no-repeat bg-cover  "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg?t=st=1723551187~exp=1723554787~hmac=95aedf6c9a528d23512c39d00fa4cffac4e06ee13094ec36066a77bc518f1d92&w=1060)",
        }}
      >
        <div className="nav-bar  p-5 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-white">Nishant</h1>
          <IconContext.Provider value={{ color: "white", size: "30px" }}>
            <div onClick={bring}>
              <RiMenu3Fill />
            </div>
          </IconContext.Provider>
        </div>

        <div
          ref={nav}
          style={{ backdropFilter: "blur(5px)" }}
          className=" px-8   vertical-nav bg-transparent w-1/4 h-full bg-white top-0 right-0 absolute"
        >
          <div className="relative ">
            <div className=" h1-container absolute top-[11.75rem]">
              <h1 className="text-4xl font-semibold mb-4 text-white">Home</h1>
              <h1 className="text-4xl font-semibold mb-4 text-white">
                About us
              </h1>
              <h1 className="text-4xl font-semibold mb-4 text-white">
                Contact us
              </h1>
              <h1 className="text-4xl font-semibold mb-4 text-white">
                Services
              </h1>
            </div>

            <div className="absolute top-3 right-4 ">
              <div onClick={goBack}>
                <IconContext.Provider
                  value={{
                    color: "black",
                    style: {
                      width: "35px",
                      cursor: "pointer",
                      height: "35px",
                      backgroundColor: "white",
                      fontSize: "20px",
                      borderRadius: "50%",
                    },
                  }}
                >
                  <IoMdClose />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
