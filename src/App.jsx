import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import People from './components/People'
import Tv_shows from './components/Tv_shows'

function App() {
 

  return (
    <>
     <div className='bg-[#1F1E24] w-screen h-full flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/tv-shows' element={<Tv_shows/>} />
        <Route path='/people' element={<People/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
