 import React from "react";
import NavBar from "../components/navbar/navbar";
import Carousel1 from "../components/carousal/carousal";
import UseEffectExample3 from "../components/useEffect/useEffectExample3";
function About() {
    return (
        <div>
            <h2>About</h2>
            <Carousel1/>
            <UseEffectExample3/>
            <NavBar/>
        </div>
    )
}

export default About;