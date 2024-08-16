import { useForm } from "react-hook-form";
import "./App.css";
import { Card, Cards, Input, Input2 } from "./components";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);

  const handleData = (data) => {
    setData((prev) => [...prev, data]);
  };

  const handelRemove = (cardIndex) => {
    setData((prev) => prev.filter((item, index) => index !== cardIndex));
  };

  return (
    <div className="w-full bg-gray-500 h-screen flex flex-col justify-center items-center">
      <Cards value={data} handelRemove={handelRemove} />
      <Input handleData={handleData} />
    </div>
  );
}

export default App;
