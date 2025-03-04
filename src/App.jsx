import React, { useState } from 'react'
const App = () => {
  const [value,setValue]=useState('');
  return (
    <div className='h-screen flex justify-center items-center bg-gray-600 text-white'>
      <div className='bg-zinc-700 h-100 w-70 flex flex-col justify-center items-center rounded-md'>
        <h1 className='text-2xl mb-3 text-zinc-400'>Pranaya's Calculator</h1>
        <form action="">
        <div className='bg-zinc-500 rounded p-2 mb-4 w-46'>
          <input type="text" value={value}  className='outline-none text-right w-full text-2xl font-bold '/>
        </div>
        <div className='space-x-2 mt-1'>
          <input type="button" value="AC" className='bg-zinc-800 p-1 w-10 h-10 rounded cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue('')}  />
          <input type="button" value="DE" className='bg-zinc-800 p-1 w-10 h-10 rounded cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value.slice(0,-1))} />
          <input type="button" value="." className='bg-zinc-800 p-1 w-10 h-10 rounded cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="/" className='bg-zinc-800 p-1 w-10 h-10 rounded cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
        </div>
        <div className='space-x-2 mt-2'>
        <input type="button" value="7" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="8" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="9" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="*" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
        </div>
        <div className='space-x-2  mt-2'>
        <input type="button" value="4" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="5" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="6" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="+" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
        </div>
        <div className='space-x-2 mt-2'>
        <input type="button" value="1" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer  hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="2" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="3" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="-" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
        </div>
        <div className='space-x-2 mt-2'>
          <input type="button" value="00" className='bg-zinc-800 p-1 rounded w-10 h-10  cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="0" className='bg-zinc-800 p-1 rounded w-10 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(value + e.target.value)} />
          <input type="button" value="=" className='bg-zinc-800 p-1 rounded w-22 h-10 cursor-pointer hover:bg-blue-600' onClick={(e)=>setValue(eval(value))} />
        </div>
        </form>
      </div>
    </div>
  )
}

export default App
