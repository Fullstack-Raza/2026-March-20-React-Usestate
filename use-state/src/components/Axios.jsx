import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Axios = () => {
  const [AllData, setAllData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setAllData(response.data);
  };

  useEffect(() => {
    getData(); // page load pe
  }, []);

  return (
    <div>
      <button 
        onClick={getData} 
        className=' active:scale-95 bg-amber-200 py-5 px-5 rounded text-lg m-2'>
        Get Data
      </button>

      {AllData.map((elem, idx) => (
        <div key={idx}>
          <h1>{elem.author}, {idx + 1}</h1>
        </div>
      ))}
    </div>
  )
}

export default Axios;