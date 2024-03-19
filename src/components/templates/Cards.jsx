import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data, title}) => {
  return (
    <div className='flex flex-wrap w-full h-full px-[3%] bg-[#1F1E24]'>
        {data.map((c,i)=>( <Link className=' relative w-[29vh] py-4  mr-[5%] mb-[5%]' key={i}>

            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${ c.profile_path || c.poster_path || c.backdrop_path}`} alt="" />

            <h1 className='text-2xl text-zinc-400 mt-3 font-semibold'>{ c.name || c.title || c.original_title || c.original_name}</h1>

              {c.vote_average && (<div className='absolute right-[-3%] bottom-[27%] text-white text-xl font-semibold w-[5.5vh] h-[5.5vh] flex justify-center items-center bg-yellow-600 rounded-full'>
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
            )}
            
        </Link>))}
    </div>
  )
}

export default Cards