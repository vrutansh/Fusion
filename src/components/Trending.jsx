import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './templates/TopNav';
import DropDown from './templates/DropDown';
import axios from '../utils/axios';
import Cards from './templates/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';


const Trending = () => {
   const navigate = useNavigate();
   const [category, setcategory] = useState('all');
   const [duration, setduration] = useState('day');
   const [trending, settrending] = useState([]);
   const [page, setpage] = useState([1]);
   const [hasMore, sethasMore] = useState(true)

   const GetTrending =  async () => {
    try {  
         const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}?language=en-US`);
        //  settrending(data.results);
        if(data.results.length > 0){
          settrending((prevState)=>[...prevState, ...data.results])
          setpage(page+1)
        }else{
          sethasMore(false)
        }
         
    } catch(error){
        console.log("error:", error);
    }
  }; 

  const refreshHandler = () =>{
      if(trending.length === 0){
         GetTrending()
      }
      else{
         setpage(1)
         settrending([])
         GetTrending()
      }
  }

  useEffect(() =>{
    refreshHandler();
  },[category, duration]);

  return trending.length>0 ? (
    <div className='w-screen h-screen  '>
        <div className='px-[2%] w-full flex items-center justify-between '>
          
            <h1 className=' text-3xl text-zinc-400 font-semibold'>
                <i onClick={()=> navigate(-1)} class='hover:text-[#6556CD] ri-arrow-left-line'/> Trending
            </h1>

           <div className='flex items-center w-[80%]'>
               <TopNav/>
               <DropDown title="Category" options={["movie", "tv", "All"]} func={
                (e)=>setcategory(e.target.value)}/>

                <div className='w-[2%]'></div>
               <DropDown title="Duration" options={["week", "day"]} func={
                (e)=>setduration(e.target.value)}/>
           </div>
        </div>
        <InfiniteScroll dataLength={trending.length} next={GetTrending} hasMore={hasMore} loader={<h1>Loading....</h1>}>
         <Cards data={trending} title={category}/>
        </InfiniteScroll>
        
    </div>
  ):<h1>Loading</h1>
}

export default Trending