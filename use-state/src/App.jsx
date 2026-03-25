import React from "react";
// import Nav from "./components/nav.jsx";
import Men from "./components/men.jsx";
// import Women from "./components/women.jsx";
// import Bubble from "./components/Bubble.jsx";
// import Usestate from "./components/UseState"
// import UseStateP from "./components/UseStateP";
import Todo from "./components/Todo.jsx";
const App = () => {
  // function abd (){
  //   console.log("Clicked");
    
  // }
  // const user1 = {
  //   gen: "male",
  // };

  // const user2 = {
  //   gen: "female",
  // };
  return (
    // <div>
    //   <Nav color="#111" title="Raza" links={["Home" , "About" , ]}/>
    //   {user1.gen == "male" ? <Men /> : <Women />}
    //   {user2.gen == "male" ? <Men /> : <Women />}
    //   <button
    //   onClick={abd}
    //   className="active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded ml-2 font-bold" >click to Download</button>
    // <div>
    //   <Bubble/>
    // </div>
    <div>
{/* <UseStateP/> */}
<Todo/>
    </div>
  );
};

export default App;
