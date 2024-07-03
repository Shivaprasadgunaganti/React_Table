import { useState } from "react";

// for intergers
// function SetName(){
//     let initial=0
//     const [count,setCount]=useState(initial)

//     return (
//         <div>
//           <h2>{count}</h2>
//            <button onClick={()=>{setCount(count+1)}}>increment</button>
//            <button onClick={()=>{setCount(count-1)}}>decrement</button>
//            <button onClick={()=>{setCount(0)}}>reset</button>
//         </div>
//     )
// }
// export default SetName

//for String

// function SetName(){
//     const [name,setName]=useState(true)

//     return (
//         <div>
//           <h2>{name?'mani':'shiva'}</h2>
//            <button onClick={()=>{setName(!name)}}>click</button>
//         </div>
//     )
// }
// export default SetName

function SetName() {
  const [name, setFunction] = useState("shiva");

  const changeName = () => {
    setFunction(name === "shiva" ? "mani" : "shiva");
  };
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>click </button>
    </div>
  );
}
export default SetName;

// function SetName(){
//     const [name,setName]=useState("mani")
//     const handleClick=()=>{
//         setName(prev=>(prev==="mani"?"mani":"siva"))
//     }
//     return (
//         <div>
//            <h2>{name}</h2>
//            <button onClick={handleClick}>click for name change</button>
//         </div>
//     )
// }
// export default SetName
