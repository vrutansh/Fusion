import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import DropDown from './templates/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
import Loader from './templates/Loader';

const Movie = () => {
  const navigate = useNavigate();
   const [category, setcategory] = useState('now_playing');
   const [movie, setmovie] = useState([]);
   const [page, setpage] = useState([1]);
   const [hasMore, sethasMore] = useState(true)
   document.title = "Fusion | Movies " + category.toUpperCase();

   const GetMovie =  async () => {
    try {  
         const { data } = await axios.get(`/movie/${category}?language=en-US&page=${page}`);
        //  setmovie(data.results);
        console.log(data)
        if(data.results.length > 0){
          setmovie((prevState)=>[...prevState, ...data.results])
          setpage(page+1)
        }else{
          sethasMore(false)
        }
         
    } catch(error){
        console.log("error:", error);
    }
  }; 

  const refreshHandler = () =>{
      if(movie.length === 0){
         GetMovie()
      }
      else{
         setpage(1)
         setmovie([])
         GetMovie()
      }
  }

  useEffect(() =>{
    refreshHandler();
  },[category]);

  return movie.length > 0 ? (
    <div className='w-screen h-screen'>
    <div className='px-[2%] w-full flex items-center justify-between '>
      
        <h1 className=' text-3xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} class='hover:text-[#6556CD] ri-arrow-left-line'/>Movie-(<small className='text-md text-zinc-500'>{category}</small>)
        </h1>

       <div className='flex items-center w-[80%]'>
           <TopNav/>
           <DropDown title="Category" options={["popular", "top_rated", "upcoming", "now_playing"]} func={
            (e)=>setcategory(e.target.value)}/>

            <div className='w-[2%]'></div>
           
       </div>
    </div>
    <InfiniteScroll dataLength={movie.length} next={GetMovie} hasMore={hasMore} loader={<h1>Loading..</h1>}>
     <Cards data={movie} title={category}/>
    </InfiniteScroll>
    
   </div>
  ):<Loader/>
}

export default Movie