import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-green-400 flex-col gap-10 ">
      <div className="text-[#2d8b40] font-medium text-2xl">Increment and Decrement</div>
      <div className="bg-white flex justify-center gap-12 flex-row py-3 rounded-sm text-[25px] text-[#344151] ">
          <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl ">
            -
          </button>
          <div className="font-bold gap-12 text-4xl">
            {count}
          </div>
          <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl ">
            +
          </button>
      </div>
      <button onClick={resetHandler} className="bg-[#36c47d] text-white px-5 py-2 rounded-sm text-lg ">
        Reset
      </button>
   </div>
  );
}

export default App;
