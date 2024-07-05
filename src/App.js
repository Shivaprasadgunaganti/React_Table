
// import ProductListing from "./components/productListing/productListing";
// import UseEffectEx3 from "./components/useEffect/useEffectExample3";
import Greetings from "./Greetings/Greetings";
// import RecipeDataTask from "./recipeDataTask/recipeDataTask";
// import TableData from "./recipeDataTask/tableData";

import RecipeDataTask from "./recipeDataTask/recipeDataTask";
import TableData from "./recipeDataTask/tableData";


const App = () => {
  const names = ["shiva", "gnana", "raghu", "sasi"];
  return (
    // <div>
    //   <Greetings name={names[0]}>How are shiva</Greetings>
    //   <Greetings name={names[2]}>How are sasi</Greetings>
    //   <Greetings name={names[2]}>How are gnana</Greetings>
    // </div>
    <div>

      {names.map((eachdata, index) => {
        return (
          <Greetings name={eachdata}>
            <h2>hello</h2>
            <h3>weclome</h3>
            <h3>hi</h3>
            <h2>hyderabad</h2>
            <h3>nalgonda</h3>
            <h3>kphb</h3>
          </Greetings>
        
          
        )
      })}

      <TableData />
      <RecipeDataTask />
     

    </div>
  );
};
export default App;
