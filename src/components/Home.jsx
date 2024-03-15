import React, { useEffect, useState } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import axios from '../utils/axios'
import Header from './templates/Header';
import HorizontalCards from './templates/HorizontalCards';

const Home = () => {
  document.title = "Homepage";
 
  const [wallpaper, setwallpaper] = useState(null);
  const [Trending, setTrending] = useState(null);

  const GetHeaderWallpaper =  async () => {
    try {  
        const {data} = await axios.get(`/trending/all/day`);
        
        setwallpaper(data.results);
      let datarandom = data.results[(Math.random()*data.results.length).toFixed()];
      setwallpaper(datarandom)
        
    } catch(e){
        console.log("error", e);
    }
  } 
 
  const GetTrending =  async () => {
    try {  
        const {data} = await axios.get(`/trending/all/day`);
        
        
      
      setTrending(data.results)
        
    } catch(e){
        console.log("error", e);
    }
  } 



  useEffect(() =>{
    !wallpaper && GetHeaderWallpaper();
    !Trending  && GetTrending();
  },[])


  return wallpaper && Trending ? (
    <>
      <SideNav/>
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <TopNav/>
        <Header data={wallpaper}/>
        <HorizontalCards data={Trending}/>
      </div>
    </>
  ):<h1>Loading</h1>
}

export default Home