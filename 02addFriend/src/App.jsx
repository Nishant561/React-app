import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([
    {
      name: "Nishant",
      img: "https://images.pexels.com/photos/15076270/pexels-photo-15076270/free-photo-of-woman-in-sweater-and-pants-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  className='w-full h-full object-cover object-center",
      profession: "coder",
      friend: false,
    },
    {
      name: "Sujata",
      img: "https://images.pexels.com/photos/23952695/pexels-photo-23952695/free-photo-of-royale.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      profession: "developer",
      friend: false,
    },
    {
      name: "Durga",
      img: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      profession: "Electrician",
      friend: false,
    },
  ]);

  const handelClick = (Cardindex) => {
    setData((prev) =>
      prev.map((item, index) =>
        Cardindex === index ? { ...item, friend: !item.friend } : item
      )
    );
  };

  return (
    <div
      className="w-full
                    h-screen
                    flex
                    justify-center
                    items-center
                    bg-zinc-400
                    "
    >
      {data.map((item, index) => (
        <div key={index} className="ml-3">
          <Card index={index} value={item} handelClick={handelClick} />
        </div>
      ))}
    </div>
  );
}

export default App;
