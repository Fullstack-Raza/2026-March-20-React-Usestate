import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[25vw] rounded-xl px-8 py-8 flex items-center flex-col text-center bg-white text-black'>
      <img className='h-24 w-24 rounded-full ' src="" alt="" />
      <h2 className='text-3xl mt-2 font-bold text-black'>{props.elem.UserName}</h2>
      <h4 className=' text-blue-500 font-semibold my-2 text-lg'>{props.elem.UserRole}</h4>
      <p className='text-sm  font-medium leading-tight'>{props.elem.Userdiscription}</p>
      <button className='px-5 py-2 rounded bg-red-600 text-white font-semibold mt-2 text-xs cursor-pointer active:scale-95'>Remove</button>
    </div>
  )
}

export default Card
