import { useReducer } from "react";
import { functionData, state } from "./useTodo";

const UseReduceTodo = () => {
  const [value,setValue]=useReducer(functionData, state);

  const addFunction=()=>{
    setValue({
        key:'Add_Todo',
        newTodo:'class at 2 pm '
    })
  }

  const removeFunction=()=>{
    setValue({
      key:'Delete_Todo',
      
    })
  }
  return  (
    <>
    <div>
        
        {
            value.todos.map((eachTodo)=>(
                <h2>{eachTodo}</h2>
            ))}
            <button onClick={addFunction} className="btn btn-primary">Add Todo</button>
            <button onClick={removeFunction}></button>
    </div>
    </>
  )
};
export default UseReduceTodo;
