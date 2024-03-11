import React from 'react'
import SideNav from './templates/SideNav';

const Home = () => {
  document.title = "Homepage";
  return (
    <>
      <SideNav/>
      <div className='w-[80%] h-full '></div>
    </>
  )
}

export default Home