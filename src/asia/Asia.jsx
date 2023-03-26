import { useState, useEffect } from "react";
import axios from "axios";
import CardAsia from "./CardAsia";
const Asia = () => {
  const url = "https://restcountries.com/v3.1/region/asia";
  const [malumot,setdata]=useState([])
  const asFun = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setdata(res.data)
    } catch (error) {}
  };
  useEffect(()=>{
    asFun()

  },[])
  return(

  <div className="container">
  <div className="row gy-5 justify-content-lg-between justify-content-center">
            
 
            {
             
             malumot.map((count,index)=>(
                 <CardAsia key={index}  img={count.flags.png} title={count.altSpellings} nomi={count.region} 
                 data={count.ccn3 } alt={count.flags.alt}  />
             ))
         }
      
         </div>
  </div>
  )
};

export default Asia;
