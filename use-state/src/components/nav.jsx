import React from "react";

const Nav = (e) => {
  return (
    <div
      style={{ backgroundColor: e.color }}
      className=" flex items-center text-white px-8 py-3 justify-between m-2"
    >
      <h2>{e.title}</h2>
      <div className="flex gap-10">
        {e.links.map(function (q) {
          return <h4>{q}</h4>;
        })}
      </div>
    </div>
  );
};

export default Nav;
