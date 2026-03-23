import React, { useState } from "react";

const UseState = () => {
  const [king, setKing] = useState("Raza");
  const [queen, setQueen] = useState("Zahra");

  const changeKing = () => {
    setKing("Muhammad");
  };

  const changeQueen = () => {
    setQueen("Fatima");
  };

  const marks = [89, 23, 45, 56, 7];
  return (
    <div>
      <h1 className="text-6xl font-medium font-serif">useState Demo</h1>

      <h2 className="text-4xl mt-4">Our King</h2>
      <p className="text-center text-6xl text-red-600">{king}</p>
      <button onClick={changeKing} className="p-4 rounded-2xl bg-amber-400 m-2">
        Change King
      </button>

      <h2 className="text-4xl mt-4">Our Queen</h2>
      <p className="text-center text-6xl text-red-600">{queen}</p>
      <button
        onClick={changeQueen}
        className="p-4 rounded-2xl bg-amber-400 m-2"
      >
        Change Queen
      </button>

      <div>
        <h1 className="text-center text-green-500 text-7xl font-bold">Grace(+5)</h1>
        {marks.map(function (elem, inx) {
          if (elem > 50) {
            return (
              <h1 className="text-blue-700 text-2xl">
                student {inx + 1} = {elem}
              </h1>
            );
          } else
            return (
              <h1 className="text-red-700 text-2xl">
                student {inx + 1} = {elem}
              </h1>
            );
        })}
      </div>
    </div>
  );
};

export default UseState;
