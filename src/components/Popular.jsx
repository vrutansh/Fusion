import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import DropDown from './templates/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
import Loader from './templates/Loader';

const Popular = () => {

  const navigate = useNavigate();
   const [category, setcategory] = useState('movie');
   const [popular, setpopular] = useState([]);
   const [page, setpage] = useState([1]);
   const [hasMore, sethasMore] = useState(true)
   document.title = "Fusion | Popular " + category.toUpperCase();

   const GetPopular =  async () => {
    try {  
         const { data } = await axios.get(`${category}/popular?language=en-US&page=${page}`);
        //  setpopular(data.results);
        console.log(data)
        if(data.results.length > 0){
          setpopular((prevState)=>[...prevState, ...data.results])
          setpage(page+1)
        }else{
          sethasMore(false)
        }
         
    } catch(error){
        console.log("error:", error);
    }
  }; 

  const refreshHandler = () =>{
      if(popular.length === 0){
         GetPopular()
      }
      else{
         setpage(1)
         setpopular([])
         GetPopular()
      }
  }

  useEffect(() =>{
    refreshHandler();
  },[category]);

  return  popular.length>0 ? (
    <div className='w-screen h-screen  '>
    <div className='px-[2%] w-full flex items-center justify-between '>
      
        <h1 className=' text-3xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} class='hover:text-[#6556CD] ri-arrow-left-line'/> Popular
        </h1>

       <div className='flex items-center w-[80%]'>
           <TopNav/>
           <DropDown title="Category" options={["movie", "tv"]} func={
            (e)=>setcategory(e.target.value)}/>

            <div className='w-[2%]'></div>
           
       </div>
    </div>
    <InfiniteScroll dataLength={popular.length} next={GetPopular} hasMore={hasMore} loader={<h1>Loading..</h1>}>
     <Cards data={popular} title={category}/>
    </InfiniteScroll>
    
   </div>
  ):<Loader/>
}

export default Popular