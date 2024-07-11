 import React, { useContext } from "react";
import NavBar from "../components/navbar/navbar";
import Carousel1 from "../components/carousal/carousal";
// import UseEffectExample3 from "../components/useEffect/useEffectExample3";
import { ProfileWrapper } from "../stack/stack";
function About() {
    const sharedData =useContext(ProfileWrapper)
    return (
        <div>
            <h2>About </h2>
            <h2>my salary is and my name is {sharedData.key.name}</h2>
            <h3>{sharedData.counter}</h3>
            {/* <h3>{sharedData.counter}</h3> */}
            <Carousel1/>
            {/* <UseEffectExample3/> */}
            <NavBar/>
        </div>
    )
}

export default About;