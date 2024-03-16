
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {

 
  return (
    
     <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
            <h1 className='font-bold'>
                <i class="text-[#6556CD] ri-tv-fill text-2xl mr-2"></i>
                <span className='text-2xl text-white'>Fusion</span>  
            </h1>

            <nav className='flex flex-col text-zinc-400 font-semibold text-2xl gap-3'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>News Feed</h1>

                <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white rounded-xl p-5 duration-300'>
                    <i class="ri-fire-fill mr-2"></i> Trending
                </Link>

                <Link className='hover:bg-[#6556CD] hover:text-white rounded-xl p-5 duration-300'>
                <i class="ri-bard-fill mr-2"></i> Popular
                    </Link>

                <Link className='hover:bg-[#6556CD] hover:text-white rounded-xl p-5 duration-300'>
                <i class="ri-movie-2-fill mr-2"></i> Movies
                </Link>

                <Link className='hover:bg-[#6556CD] hover:text-white rounded-xl p-5 duration-300'>
                <i class="ri-team-fill mr-2"></i> People
                </Link>
              
            </nav>

            
            <hr className='border-none bg-zinc-400 h-[1px]' />


            <nav className='flex flex-col text-zinc-400 font-semibold text-2xl gap-3'>
                <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>

                <Link className='hover:bg-[#6556CD] hover:text-white rounded-xl p-5 duration-300'>
                <i class="ri-pass-pending-line mr-2"></i> Contact
                </Link>

                <Link className='hover:bg-[#6556CD] hover:text-white rounded-xl p-5 duration-300'>
                <i class="ri-folder-info-fill mr-2"></i> About
                </Link>
              
            </nav>
       </div>
    
  )
}

export default SideNav