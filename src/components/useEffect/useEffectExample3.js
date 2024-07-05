import React, { useEffect } from "react";

function UseEffectEx3() {
  // const {children} =prop
  useEffect(() => {
    window.addEventListener("mousemove", captureMouse);
  }, []);

  const captureMouse = (event) => {
    console.log(event);
    // console.log(event.clientX, "X-AXIS");
    // console.log(event.clientY, "Y-AXIS");
    // {children}
  };

  return <div>UseEffectEx3</div>;
}

export default UseEffectEx3;
