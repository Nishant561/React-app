import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Input } from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen flex justify-center text-white items-center bg-black">
        <div className="w-[60%] flex flex-col gap-5 items-center p-6 bg-zinc-500 rounded-lg">
          <h1 className="text-3xl font-semibold">Todo List By Redux</h1>
          <Input/>
          
        
        
        </div>
      </div>
    </>
  );
}

export default App;
