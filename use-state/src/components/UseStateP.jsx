import React, { useState } from "react";

const UseStateP = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const  ss =(e)=> {
    e.preventDefault()
    console.log(e);
  }
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  const btnStyle = "py-6 px-8 bg-blue-600 rounded text-2xl font-bold";

  return (
    <div className="bg-red-400 h-screen w-screen flex flex-col items-center justify-center gap-10">
      <h1 className="py-10 px-16 bg-blue-600 rounded text-6xl font-bold">
        {count}
      </h1>

      <div className="flex gap-6">
        <button onClick={increment} className={btnStyle}>
          +
        </button>
        <button onClick={decrement} className={btnStyle}>
          -
        </button>
        <button onClick={reset} className={btnStyle}>
          Reset
        </button>
      </div>

      <form onSubmit={(e)=>{
        ss(e)
      }}>
      <input type="text" placeholder="Name " className="px-10" />
      <button className="">done</button>
      </form>
    </div>
  );
};

export default UseStateP;
