import React, { useState } from "react";
import NavBar from "../components/navbar/navbar";
import ButtonComponent1 from "../components/buttonComponent/buttonComponent";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  return (
    <div>
      <NavBar />
      <h2>welcome to home screen</h2>

      <button onClick={fetchData}>fetch data</button>

      {data.length > 0 ? (
        <>
          {data.map((each) => {
            return (
              <div>
                <li key={each.id}></li>
                <Link to={`/hyderabad/${each.title}/info`}>
                  <ButtonComponent1 text={each.title} />
                </Link>
              </div>
            );
          })}
       </>
      ) : 
        <h3>no products found</h3>
      }
     
    </div>
  );
}
export default Home;
