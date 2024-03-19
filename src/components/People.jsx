import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TopNav from './templates/TopNav';
import DropDown from './templates/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
import Loader from './templates/Loader';


const People = () => {
    const navigate = useNavigate();
   const [category, setcategory] = useState('popular');
   const [people, setpeople] = useState([]);
   const [page, setpage] = useState([1]);
   const [hasMore, sethasMore] = useState(true)
   document.title = "Fusion | People " + category.toUpperCase();

   const GetPeople =  async () => {
    try { 
         const { data } = await axios.get(`/trending/person/day?language=en-US`);
        //  setpeople(data.results);
        console.log(data)
        if(data.results.length > 0){
          setpeople((prevState)=>[...prevState, ...data.results])
          setpage(page+1)
        }else{
          sethasMore(false)
        }
         
    } catch(error){
        console.log("error:", error);
    }
  }; 

  const refreshHandler = () =>{
      if(people.length === 0){
         GetPeople()
      }
      else{
         setpage(1)
         setpeople([])
         GetPeople()
      }
  }

  useEffect(() =>{
    refreshHandler();
  },[category]);


  return people.length > 0 ? (
    <div className='w-screen h-screen'>
    <div className='px-[2%] w-full flex items-center justify-between '>
      
        <h1 className=' text-3xl text-zinc-400 font-semibold'>
            <i onClick={()=> navigate(-1)} class='hover:text-[#6556CD] ri-arrow-left-line'/>People
            {/* (<small className='text-md text-zinc-500'>{category}</small>) */}
        </h1>

       <div className='flex items-center w-[80%]'>
           <TopNav/>

            <div className='w-[2%]'></div>
           
       </div>
    </div>
    <InfiniteScroll dataLength={people.length} next={GetPeople} hasMore={hasMore} loader={<h1>Loading..</h1>}>
     <Cards data={people} title={category}/>
    </InfiniteScroll>
    
   </div>
  ):<Loader/>
}

export default People