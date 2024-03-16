import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './templates/TopNav';
import DropDown from './templates/DropDown';

const Trending = () => {
   const navigate = useNavigate();
  return (
    <div className='p-[3%] w-screen h-screen '>
        <div className='w-full flex items-center justify-between '>
          
            <h1 className=' text-3xl text-zinc-400 font-semibold'>
                <i onClick={()=> navigate(-1)} class='hover:text-[#6556CD] ri-arrow-left-line'></i> Trending
            </h1>

           <div className='flex items-center w-[80%]'>
               <TopNav/>
               <DropDown title="Category" options={["Movie", "TV", "All"]} func=""/>
                <div className='w-[2%]'></div>
               <DropDown title="Duration" options={["Week", "Day"]} func=""/>
           </div>
        </div>
    </div>
  )
}

export default Trending