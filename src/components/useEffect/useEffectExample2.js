import React, { useEffect, useState } from "react";

const UseEffectExample2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("use effect");
    document.title =`react count ${count1}`
  },);

  const countHandler1 = () => {
    setCount1(count1 + 1);
  };
  const countHandler2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <h2>count 1 {count1}</h2>
      <button onClick={countHandler1}>increase 1</button>

      <h2>count 2 {count2}</h2>
      <button onClick={countHandler2}>increase 1</button>
    </div>
  );
};

export default UseEffectExample2;
