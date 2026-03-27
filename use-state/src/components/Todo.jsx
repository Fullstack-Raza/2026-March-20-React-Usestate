import React, { createElement, useState } from "react";
import Card from "./Card.jsx";

const Todo = () => {
  const [UserName, setUserName] = useState("");
  const [UserRole, setUserRole] = useState("");
  const [Userdiscription, setUserdiscription] = useState("");
  const [UserURL, setUserURL] = useState("");
  const [allUser, setallUser] = useState([]);
  function submithandler(e) {
    e.preventDefault();
    const oldUser = [...allUser];
    oldUser.push({UserName, UserRole, Userdiscription, UserURL });
    console.log(oldUser);

    setallUser(oldUser);
    setUserName("");
    setUserURL("");
    setUserdiscription("");
    setUserRole("");
  }
  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className=" px-2 py-10 flex flex-wrap p-2 justify-center"
      >
        <input
          value={UserName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%] text-xl font-semibold"
          type="text"
          placeholder="Enter your name "
        />
        <input
          value={UserURL}
          onChange={(e) => {
            setUserURL(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%] text-xl font-semibold"
          type="text"
          placeholder="Image URL"
        />
        <input
          value={UserRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%] text-xl font-semibold"
          type="text"
          placeholder="Enter role"
        />
        <input
          value={Userdiscription}
          onChange={(e) => {
            setUserdiscription(e.target.value);
          }}
          className="border-2 px-5 py-2 rounded m-2 w-[45%] text-xl font-semibold"
          type="text"
          placeholder="Enter discription"
        />
        <button className=" active:scale-95 px-5 bg-emerald-700 py-2 rounded m-2 w-[92%] cursor-pointer  text-xl font-semibold">
          Create user
        </button>
      </form>
      <div className="px-2 py-10 flex flex-wrap p-2 ">
        {allUser.map(function (elem, idx) {
          return <Card elem={elem} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
