import { useState } from "react";
import { Navbar, Card } from "./components";
import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      title: "Gorkhe khukuri",
      singer: "Shanti",
      img: "https://images.pexels.com/photos/20145161/pexels-photo-20145161/free-photo-of-handsome-man-with-wet-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      added: false,
    },
    {
      title: "Perfect",
      singer: "Ed-sheeran",
      img: "https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      added: false,
    },
    {
      title: "Shape of you",
      singer: "Prakash",
      img: "https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      added: false,
    },
  ]);

  const handelClick = (Cardindex) => {
    setData((prev) =>
      prev.map((item, index) => {
        return index === Cardindex ? { ...item, added: !item.added } : item;
      })
    );
  };

  return (
    <div className="w-full h-screen">
      <Navbar value={data} />
      <div className="flex flex-wrap gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-3/12  h-1/5 shrink-0 bg-white rounded-md p-3 pb-10 flex mt-10 gap-10 items-center relative"
          >
            <Card value={item} index={index} handelClick={handelClick} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
