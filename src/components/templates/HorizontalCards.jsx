import React from 'react'



const HorizontalCards = ({data}) => {
  return (
        <div className='w-[100%]  flex overflow-y-hidden mb-5 p-5'>
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
    
  )
}

export default HorizontalCards