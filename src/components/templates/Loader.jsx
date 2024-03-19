import React from 'react'

export const Loader  = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <img className='object-cover w-[35vw] h-[60vh] mb-36' src="/Loader.gif" alt="" />
    </div>
  )
}

export default Loader;
