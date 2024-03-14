import React from 'react'

const Header = ({data}) => {
    console.log(data)
  return (
    <div style={{
        background:`linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,

        backgroundPosition:'center',
        backgroundSize:'cover',
     }} 
        
        className='w-full h-[50vh] flex flex-col justify-end p-[10%]'>

            <h1 className=' w-[70%] font-black text-5xl text-white'>{data.name || data.title || data.original_title || data.original_name} </h1>
            <p className='w-[70%] text-white'>{data.overview}</p>
            
    </div>
  )
}

export default Header