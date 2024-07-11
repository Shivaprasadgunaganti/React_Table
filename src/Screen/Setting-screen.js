import React, { useContext, useRef, useState } from "react";
import Navbar from "../components/navbar/navbar";
import UseEffect from "../components/useEffect/useEffectExample1";
import { ProfileWrapper } from "../stack/stack";
import ButtonComponent1 from "../components/buttonComponent/buttonComponent";
function Setting() {
  const sharedData = useContext(ProfileWrapper);
  const [input,setInput]=useState('')
  const refValue=useRef('')

  const incrementHandler = () => {
    sharedData.incrementCounter();
  };
  const decrementHandler =()=>{
    sharedData.decrementCounter();
  }

  const inputData = (k)=>{
      setInput(refValue.current.value)
     
  }
console.log(refValue.current.value)
  const updateChange = ()=>{
    sharedData.updateValue(input)
  }

  return (
    <div>
      <h2>Setting</h2>
      <h2>welcome to setting counter : {sharedData.counter}</h2>
      <ButtonComponent1 text={"increment"} onPress={incrementHandler} />
      <ButtonComponent1 text={'decrement'} onPress={decrementHandler}/>
     
       <input type="text" ref={refValue} onChange={inputData}/>
      <ButtonComponent1 text={'update'} onPress={updateChange}/>
      <Navbar />
      {/* <UseEffect /> */}
    </div>
  );
}
export default Setting;
