import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'
const TopNav = () => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
 
    const Getsearches = async () => {
      try {  
          const {data} = await axios.get(`/search/multi?query=${query}`);
          
          setsearches(data.results);
          
      } catch(e){
          console.log("error", e);
      }
    } 
  
   useEffect(()=>{
      Getsearches();
   },[query]);

  return (
    <div className='w-full h-[10vh] relative flex justify-start pl-[15%] items-center'>
        <i class="text-zinc-400 text-3xl ri-search-line"></i>

        <input onChange={(e)=> setquery(e.target.value)}
         value={query}
         className='w-[50%] text-white mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />

        {query.length > 0 && (<i onClick={()=>setquery("")} class="text-zinc-400 text-3xl ri-close-fill"></i>)}
        

        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[99%] left-[18%] overflow-auto '>
           {searches.map((s,i)=>
            <Link key={i} className='hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10  flex justify-start items-center border-zinc-100 border-b-2'>


            <img className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg' 
            src={
              s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${
              s.backdrop_path || s.profile_path }`:noimage} alt="" />


            <span>{s.name || s.title || s.original_title || s.original_name }</span>
          </Link>
           )}
            
        </div>

    </div>
  )
}

export default TopNav