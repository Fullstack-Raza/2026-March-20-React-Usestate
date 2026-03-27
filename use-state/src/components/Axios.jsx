import React, { useState } from 'react'
import axios from 'axios';

const Axios = () => {
    const [AllData,setuAllData] = useState([])
   async function getdeta(){
const response = await axios.get("https://picsum.photos/v2/list")
console.log(response.data);

      setuAllData(response.data)
        
    }
  return (
    <div>
      <button onClick={getdeta} className='active:scale-95 bg-amber-200 py-5 px-5 rounded text-lg m-2 border-red-400 border-solid border-5'>Get Data</button>
      {AllData.map(function(elem,idx){
return <div key={idx}>
      <h1>{elem.author}, {idx + 1}</h1>
      <img src={elem.download_url} alt={elem.author} />
    </div>

      })}
    </div>
  )
}

export default Axios
