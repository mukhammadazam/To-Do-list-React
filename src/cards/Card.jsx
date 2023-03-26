import { useState,useEffect } from "react";
import axios from "axios";
import Cards from './CardsStyle';
const Card = () => {
    const [data,setData]=useState([]);
    const fetchData=async ()=>{
try {
    const response =await axios.get('https://restcountries.com/v3.1/subregion/Northern')
    setData(response.data)
} catch (error) {
    
}
    };
    useEffect(()=>{
        fetchData()
    
    },[]);
  return (
    <div className="container pt-5">
 <div className="card__content">
    <input type="text" className="w-75 d-block px-5 p-1 card_input" />
 <div className="row gy-5 pt-5 m-0 justify-content-lg-between justify-content-center">
            
 
            {
             
             
             data.map((countres,index)=>(
                 <Cards key={index} img={countres.flags.png} title={countres.altSpellings[1].slice(0,20)} nomi={countres.region} 
                data={countres.ccn3 } alt={countres.flags.alt}  />
             ))
         }
      
         </div>
 </div>
    </div>
  )
}

export default Card