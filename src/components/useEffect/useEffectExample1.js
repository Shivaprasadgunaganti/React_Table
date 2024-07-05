import axios from "axios";
import { useEffect, useState } from "react";
import CustomSpinner from "../CustomSpinner/customSpinner";
// import CustomSpinner from "../CustomSpinner/customSpinner";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("useEffect executing");
    fetchData();
  },);

  const countHandler1 = () => {
    setCount1(count1 + 1);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response, "response");
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
       <h2>count 1 {count1}</h2>
       <button onClick={countHandler1}>increase 1</button>
      { data.length > 0 ? (
        data.map((each, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              margin: "10px",
              flex: "1 1 calc(33.333% - 20px)",
              boxSizing: "border-box",
            }}
          >
            <h2>{each.title}</h2>
            <img src={each.image} alt={each.title} width={400} height={300} />
            <p>{each.description}</p>
            <p>
              <strong>${each.price}</strong>
            </p>
            <p>Category: {each.category}</p>
            <p>
              Rating: {each.rating.rate} (Count: {each.rating.count})
            </p>
          </div>
        )) ) : <CustomSpinner/>}
    </div>
  );
};

export default UseEffect;
