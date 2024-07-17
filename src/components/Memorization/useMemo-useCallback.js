import { useRef, useState } from "react";
import ButtonComponent1 from "../buttonComponent/buttonComponent";

const UseMemoandUseCallback = () => {
  const [data, setData] = useState([]);
  const refValue = useRef();
  const fetchData = () => {
    const trim = refValue.current.value;
    setData([...data, trim]);
    refValue.current.value = "";
  };
  console.log(data);
  return (
    <>
      <input type="text" ref={refValue} />
      <ButtonComponent1
        onPress={fetchData}
        text="add button"
        // class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />

      <ol>
        {
            data.map((each,index)=>{
                console.log("click")
                return(
                    <li key={index}>
                    <h2>{each} items count = {index+1}</h2>
                </li>
                
  )})
        }
      </ol>
    </>
  );
};
export default UseMemoandUseCallback;

// import { useRef, useState } from "react";
// import ButtonComponent1 from "../buttonComponent/buttonComponent";

// const UseMemoandUseCallback = () => {
//   const [data, setData] = useState([]);

//   const refValue = useRef();
//   const fetchData = () => {
//     const trim = refValue.current.value;
//     setData([...data, trim]);
//     refValue.current.value = "";
//   };
//   console.log(data);

//   return (
//     <>
//       <input type="text"  ref={refValue} />
//       <ButtonComponent1
//         onPress={fetchData}
//         text="add button"
    
//       />

//        {data.map((each) => (
//         <h2>{each}</h2>
//       ))} 
      
//         // <h2>{data}</h2>
      
//     </>
//   );
// };
// export default UseMemoandUseCallback;
