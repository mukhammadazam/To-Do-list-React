import { useState, useEffect } from "react";
import axios from "axios";
import CardAsia from "./CardAsia";
import "./Asia.scss";
const Asia = () => {
  const url = "https://restcountries.com/v3.1/region/asia";
  const [malumot, setdata] = useState([]);
  const [search, setSearch] = useState("");
  const asFun = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setdata(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    asFun();
  }, []);
  const searchFun = malumot
    .filter((value) => {
      console.log(value.altSpellings[1]);
      if (search === "") {
        return value;
      } else if (value?.altSpellings[1]?.toLowerCase().includes(search?.toLowerCase())) {
        return value;
      }
    })
    .map((count, index) => (
      <CardAsia
        key={index}
        img={count.flags.png}
        title={count.altSpellings}
        nomi={count.region}
        data={count.ccn3}
        alt={count.flags.alt}
      />
    ));
  return (
    <div className="container">
      <div className="content">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="d-block  px-5 inputt w-75 p-1"
        />
        <div className="row m-0 pt-5 gy-5 justify-content-lg-between justify-content-center">
          {searchFun}
        </div>
      </div>
    </div>
  );
};

export default Asia;
