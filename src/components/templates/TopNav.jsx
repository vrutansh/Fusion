import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    const [query, setquery] = useState("");
    console.log(query)

  return (
    <div className='w-full h-[10vh] relative flex justify-start ml-[20%] items-center'>
        <i class="text-zinc-400 text-3xl ri-search-line"></i>

        <input onChange={(e)=> setquery(e.target.value)}
         value={query}
         className='w-[50%] text-white mx-12 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />

        {query.length > 0 && (<i onClick={()=>setquery("")} class="text-zinc-400 text-3xl ri-close-fill"></i>)}
        

        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto '>
             {/* <Link className='hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10  flex justify-center items-center border-zinc-100 border-b-2'>
              <img src="" alt="" />
              <span>Hello World</span>
            </Link> */}
        </div>

    </div>
  )
}

export default TopNav