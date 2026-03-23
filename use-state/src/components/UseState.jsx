import React, { useState } from "react";

const UseState = () => {
  const [king, setking] = useState(0);
  const [queen, setqueen] = useState("Z");

  const abc = () => {
    
    setking(king+1);
    
  };
  const que = () => {
    console.log(queen);
    setqueen("F");
    console.log(queen);
  };
  return (
    <div>
      <h1 className="text-6xl font-medium font-serif">UseState??</h1>
      <h1 className="text-6xl font-medium font-serif">our King</h1>
      <p className="text-center text-6xl text-red-600">{king}</p>
      <button onClick={abc} className="p-4 rounded-2xl bg-amber-400 m-2">
        change the king
      </button>
      <h1 className="text-6xl font-medium font-serif">our King</h1>
      <p className="text-center text-6xl text-red-600">{queen}</p>
      <button onClick={que} className="p-4 rounded-2xl bg-amber-400 m-2">
        change the king
      </button>
    </div>
  );
};

export default UseState;
