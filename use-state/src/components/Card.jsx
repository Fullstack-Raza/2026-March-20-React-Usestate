import React from 'react'

const Card = () => {
  return (
    <div className='w-[25vw] rounded-xl px-8 py-8 flex items-center flex-col text-center bg-white text-black'>
      <img className='h-24 w-24 rounded-full ' src="" alt="" />
      <h1 className='text-2xl mt-2 font-bold'>Raza</h1>
      <h4 className=' text-blue-500 font-semibold my-2 text-lg'>Muhammad</h4>
      <p className='text-sm  font-medium leading-tight'>Lorem ipsum dolor sit amet. </p>
      <button className='px-5 py-2 rounded bg-red-600 text-white font-semibold mt-2 text-xs cursor-pointer active:scale-95'>Remove</button>
    </div>
  )
}

export default Card
