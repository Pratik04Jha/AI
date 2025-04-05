import React from 'react'

const Topbar = () => {
  return (
    <div className='flex h-10 w-full fixed z-10000000000000000 top-0 left-60 pr-70 py-6  pl-10 justify-between items-center bg-zinc-900 text-white'>
          <div className='bg-zinc-700 py-1 px-5 rounded-lg'>
              <h1 >Broke.ai</h1>
          </div>
          <h1 className='font-semibold text-[18px] text-white/90' >Pratik.ai</h1>
          <button className='bg-white text-black rounded-lg py-1 px-5 font-semibold cursor-pointer '>Sign up</button>
    </div>
  )
}

export default Topbar
