import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'

function App() {
 

  return (
    <>
     <div className='bg-[#1F1E24] w-screen h-full flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
