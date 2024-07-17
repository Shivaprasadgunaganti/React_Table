// import {  useRef, useState } from "react"

import { useRef, useState } from "react"


// const UseRefExample=()=>{
   
//     const [data,setData]=useState('')
//     const res1= useRef('')
//     const refValue =()=>{
        
//            setData(res1.current.value)
//     }
//     console.log(data)
//   return (
//     <>
//     <input type="text"  ref={res1} />
//     <button type="submit" onClick={refValue}> button</button>
//     <h2>{data}</h2>
//     </>
//   )
// }
// export default UseRefExample

const UseRefExample=()=>{
  const [data,setdata]=useState('')
  const refEx=useRef('')
  console.log(data)
  const refValue=()=>{
      setdata(refEx.current.value)
  }
  return (
    <>
    <input  type="text" ref={refEx}/>
    <button onClick={refValue}>button</button>
    <h2>{data}</h2>
    </>
  )
}
export default UseRefExample