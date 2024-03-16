import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './templates/TopNav';
import DropDown from './templates/DropDown';
import axios from '../utils/axios';
import Cards from './templates/Cards';


const Trending = () => {
   const navigate = useNavigate();
   const [category, setcategory] = useState('all');
   const [duration, setduration] = useState('day');
   const [trending, settrending] = useState([]);


   const GetTrending =  async () => {
    try {  
         const { data } = await axios.get(`/trending/${category}/${duration}`);
         settrending(data.results);
         
    } catch(error){
        console.log("error", error);
    }
  }; 

  useEffect(() =>{
    GetTrending();
  },[category, duration]);

  return trending.length>0 ? (
    <div className='px-[3%] w-screen h-screen overflow-hidden overflow-y-auto '>
        <div className='w-full flex items-center justify-between '>
          
            <h1 className=' text-3xl text-zinc-400 font-semibold'>
                <i onClick={()=> navigate(-1)} class='hover:text-[#6556CD] ri-arrow-left-line'/> Trending
            </h1>

           <div className='flex items-center w-[80%]'>
               <TopNav/>
               <DropDown title="Category" options={["Movie", "TV", "All"]} func={
                (e)=>setcategory(e.target.value)}/>

                <div className='w-[2%]'></div>
               <DropDown title="Duration" options={["Week", "Day"]} func={
                (e)=>setduration(e.target.value)}/>
           </div>
        </div>

        <Cards data={trending} title={category}/>
    </div>
  ):<h1>Loading</h1>
}

export default Trending