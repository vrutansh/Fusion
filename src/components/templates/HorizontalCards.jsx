import React from 'react'
import DropDown from './DropDown'


const HorizontalCards = ({data}) => {
  return (
    <div className='w-full p-5 '>
          <div className='mb-5 flex justify-between'>
             <h1 className='text-2xl font-semibold text-zinc-400'>Trending</h1> 
             <DropDown title="Filter" options={['Tv', 'Movie', 'all']}/>
          </div>

         


        <div className='w-[100%]  flex overflow-y-hidden'>
            {data.map((d,i)=> <div key={i} className='min-w-[18%] h-full bg-zinc-900 mr-5 mb-5 '>

                <img className='w-full h-[55%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="" />

             <div className='text-white p-3 h-[45%]'> 
                  <h1 className='font-semibold text-xl '>{d.name || d.title || d.original_title || d.original_name} </h1>

                  <p className=''>{d.overview.slice(0, 50)}...
                   <span className='text-blue-500'>more</span>
                  </p>
            </div>

            </div>)}
        </div>
    </div>
  )
}

export default HorizontalCards