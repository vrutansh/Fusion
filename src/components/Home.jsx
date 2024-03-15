import React, { useEffect, useState } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import axios from '../utils/axios'
import Header from './templates/Header';
import HorizontalCards from './templates/HorizontalCards';
import DropDown from './templates/DropDown';

const Home = () => {
  document.title = "Homepage";
 
  const [wallpaper, setwallpaper] = useState(null);
  const [Trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");


  const GetHeaderWallpaper =  async () => {
    try {  
        const {data} = await axios.get(`/trending/all/day`);
       
       let datarandom = data.results[(Math.random()*data.results.length).toFixed()];
       setwallpaper(datarandom)
        
    } catch(e){
        console.log("error", e);
    }
  } 
 
  const GetTrending =  async () => {
    try {  
        const {data} = await axios.get(`/trending/${category}/day`);
         setTrending(data.results);
    } catch(e){
        console.log("error", e);
    }
  } 



  useEffect(() =>{
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  },[category]);


  return wallpaper && Trending ? (
    <>
      <SideNav/>
      
      <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <TopNav/>
        <Header data={wallpaper}/>

        <div className='p-6 flex justify-between'>
             <h1 className='text-2xl font-semibold text-zinc-400'>Trending</h1> 
             <DropDown title="Filter" options={['Tv', 'Movie', 'all']} func={(e)=>setcategory(e.target.value)}/>
          </div>

        <HorizontalCards data={Trending}/>
      </div>
    </>
  ):<h1>Loading</h1>
}

export default Home