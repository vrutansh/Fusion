
import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import DropDown from './templates/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
import Loader from './templates/Loader';

const Tv_shows = () => {
    const navigate = useNavigate();
   const [category, setcategory] = useState('airing_today');
   const [tv, settv] = useState([]);
   const [page, setpage] = useState([1]);
   const [hasMore, sethasMore] = useState(true)
   document.title = "Fusion | Tv Shows" + category.toUpperCase();

   const GetTv=  async () => {
    try {   
         const { data } = await axios.get(`/tv/${category}?language=en-US&page=${page}`);
        //  settv(data.results);
        console.log(data)
        if(data.results.length > 0){
          settv((prevState)=>[...prevState, ...data.results])
          setpage(page+1)
        }else{
          sethasMore(false)
        }
         
    } catch(error){
        console.log("error:", error);
    }
  }; 

  const refreshHandler = () =>{
      if(tv.length === 0){
         GetTv()
      }
      else{
         setpage(1)
         settv([])
         GetTv()
      }
  }

  useEffect(() =>{
    refreshHandler();
  },[category]);

  return tv.length > 0 ? (
    <div className='w-screen h-screen'>
    <div className='px-[2%] w-full flex items-center justify-between '>
      
        <h1 className=' text-3xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} class='hover:text-[#6556CD] ri-arrow-left-line'/>TV-(<small className='text-md text-zinc-500'>{category}</small>)
        </h1>

       <div className='flex items-center w-[80%]'>
           <TopNav/>
           <DropDown title="Category" options={["airing_today","on_the_air","popular", "top_rated"]} func={
            (e)=>setcategory(e.target.value)}/>

            <div className='w-[2%]'></div>
           
       </div>
    </div>
    <InfiniteScroll dataLength={tv.length} next={GetTv} hasMore={hasMore} loader={<h1>Loading..</h1>}>
     <Cards data={tv} title={category}/>
    </InfiniteScroll>
    
   </div>
  ):<Loader/>
}

export default Tv_shows