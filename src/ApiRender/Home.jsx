import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loadeng, setLoadeng] = useState(false);
//   const [error, setErrror] = useState(null);
  const input = document.querySelector(".input");
 
  async function asncFun() {
    try {
      let url;
      if (input) {
        url = `https://restcountries.com/v3.1/name/${input.value}`;
      } else {
        url = "https://restcountries.com/v3.1/all";
      }
      const response = await axios.get(url);
      setData(response.data);
      setLoadeng(false);
    } catch (error) {
      setLoadeng(false);
    }
  }

  useEffect(() => {
    asncFun();
  }, []);

  return (
    <div>
      {
        <div className="container">
          <input type="text" className="input" />
          <div className="row justify-content-lg-between   ">
            {data.map((Element, index) => (
              <div
                className=" justify-content-lg-between gy-5 col-12 col-lg-4  "
                key={index}
              >
                <div className="card">
                  <img
                    src={Element.flags.png}
                    alt={Element.name}
                    height="300px"
                  />
                  <h1>{Element.name.common}</h1>
                  <span>{Element.currensy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
