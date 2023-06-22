import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler(evet) {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center gap-10 bg-[#581c87] items-center flex-col bold font-medium">
      <div className="text-[#c7d2fe] text-4xl"> Increment && Decrement</div>

      <div className="flex bg-white gap-10 py-3 px-4 text-[25px] border rounded-md border-rose-500 ">
        <button
          onClick={decreaseHandler}
          className="text-5xl w-20 border-r-2 border-red-500 text-center"
        >
          -
        </button>
        <div className=" text-5xl font-bold gap-12 text-center">{count}</div>
        <button
          onClick={increaseHandler}
          className=" text-5xl w-20 border-l-2 border-red-500 text-center"
        >
          +
        </button>
      </div>

      <button onClick={resetHandler} className="bg-white text-2xl py-2 px-3 rounded-md drop-shadow-2xl"> Reset</button>
    </div>
  );
}

export default App;
