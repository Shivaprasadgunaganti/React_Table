import { useCallback, useState } from "react"
import ButtonComponent1 from "../buttonComponent/buttonComponent"

const UseCallBackEx=()=>{
    const [age,setAge]=useState(0)
    const [salary,setSalary]=useState(0)

    const ageHandler=useCallback(()=>{
        setAge(age+1)
    },[age])
   
    const salaryHandler=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
   
    return (
        <>
        <h2>age:{age}</h2>
        <h2>salary:{salary}</h2>
        <ButtonComponent1 text='age' onPress={ageHandler}/>
        <ButtonComponent1 text='salary' onPress={salaryHandler}/>
        </>
    )
}
export default UseCallBackEx