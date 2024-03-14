import React, { useEffect, useState } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import axios from '../utils/axios'
import Header from './templates/Header';

const Home = () => {
  document.title = "Homepage";
 
  const [wallpaper, setwallpaper] = useState(null);

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
 
  useEffect(() =>{
    !wallpaper && GetHeaderWallpaper();
  },[])


  return wallpaper ? (
    <>
      <SideNav/>
      <div className='w-[80%] h-full '>
        <TopNav/>
        <Header data={wallpaper}/>
      </div>
    </>
  ):<h1>Loading</h1>
}

export default Home