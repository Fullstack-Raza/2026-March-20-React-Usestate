import React from "react";
import Nav from "./components/nav.jsx";
import Men from "./components/men.jsx";
import Women from "./components/women.jsx";
const App = () => {
  function abd (){
    console.log("Clicked");
    
  }
  const user1 = {
    gen: "male",
  };

  const user2 = {
    gen: "female",
  };
  return (
    <div>
      {user1.gen == "male" ? <Men /> : <Women />}
      {user2.gen == "male" ? <Men /> : <Women />}
      <button
      onClick={abd}
      className="active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded ml-2 font-bold" >Download</button>
    </div>
  );
};

export default App;
