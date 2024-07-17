import { useMemo, useState } from "react"

const UsememoEx=()=>{
    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    const [isLogin,setLogin]=useState(false)

    const Counter1Fun=()=>{
        setCounter1(counter1+1)
    }
    const Counter2Fun=()=>{
       setCounter2(counter2+1)
    }
    const isEven= useMemo(()=>{
        console.log('counter1 excuting')
        return counter1 %2 ===0 ? 'even':'odd'
    },[counter1])
    

    return (
        <>
        <h2>counter1 :{counter1} - {isEven}</h2>
        <h2>counter2 : {counter2}</h2>
          <button onClick={Counter1Fun} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">button1</button>
          <button onClick={Counter2Fun} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">button2</button>
          <button onClick={()=>{setLogin(!isLogin)}}>click me</button>
          {isLogin ? <h2>weclome</h2>: <h2>please wait</h2>}
        </>
    )
}
export default UsememoEx