import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <div className='w-full h-[10vh] relative flex justify-center items-center'>
        <i class="text-zinc-400 text-3xl ri-search-line"></i>

        <input className='w-[50%] text-white mx-12 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />

        <i class="text-zinc-400 text-3xl ri-close-fill"></i>

        <div className='absolute w-[50%] h-[50vh] bg-red-100 top-[90%]'>
            <Link className=' bg-red-200 w-[100%] inline-block bg-orange-800 p-10 flex justify-center items-center'>
              <img src="" alt="" />
              <span>Hello World</span>
            </Link>
        </div>

    </div>
  )
}

export default TopNav