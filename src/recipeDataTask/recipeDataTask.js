import axios from "axios";
import { useEffect, useState } from "react";
import CustomSpinner from "../components/CustomSpinner/customSpinner";
import TableData from "./tableData.js";

const RecipeDataTask = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
      const response = await axios.get("https://dummyjson.com/recipes");
      console.log(response, "response");
      // console.log( "hello");

      if (response.status === 200) {
        let recipeList = response.data.recipes;
        console.log(recipeList, "recipeList");
        setData(recipeList);
      } else {
        console.error("Failed to fetch data: ", response.status);
      }
    } 
 

  return (
    <div>{data.length > 0 ? <TableData data={data} /> : <CustomSpinner />}</div>
  );
}

export default RecipeDataTask;
