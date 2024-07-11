
import  { ListItems1, ListItems2 } from "./components/lists/lists";


import { UseReduceFun } from "./components/useReduce/useReduce";
import UseReduceTodo from "./components/useReduce/useReduceTodo";
import UseRef from "./components/useRef/useRef";




const App = () => {
  return (
   <div>
   

    <ListItems1/>
    <ListItems2/>

     {/* <UseReduceFun/> */}
     {/* <UseReduceTodo/> */}
     <UseRef/>
    
   </div>
  
  )
};
export default App;
