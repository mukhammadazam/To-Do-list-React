import { useState,useEffect } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
const Pages = () => {
  const {ccn3}=useParams();
  const [data,setData]=useState([]);
  const fetchData=async ()=>{
try {
  const response =await axios.get(`https://restcountries.com/v3.1/alpha/170`)
  setData(response.data)
} catch (error) {
  
}
  };
  useEffect(()=>{
      fetchData()
  
  },[]);
  return (
     
    <div className=" col-lg-4 px-0  ">
           <div className="">
            { console.log(data)}
           </div>
      {/* <img className="px-0 d-block" src={data.flags.png} alt={data.flags.alt} /> */}
      <h1 className="text-center pt-3">{data.region}</h1>
      <h2 className="text-center">{data.altSpellings}</h2>
   <Link to='/Europa' className="text-decoration-none  mt-3  fs-5  align-items-end ms-5 ">Back to homepage</Link>
    </div>

        
     
   
  )
}

export default Pages