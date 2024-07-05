import React from "react"
import   Navbar  from "../components/navbar/navbar"
import { Link, Outlet } from "react-router-dom"
import UseEffectExample2 from "../components/useEffect/useEffectExample2"
function Contact() {
    return (
        <div>
            <Navbar/>
            <h2>contact</h2>
            <Link to={'doctor'}>Doctor</Link>
            <Link to={'engineer'}>Engineer</Link>
            <Outlet/>
            <UseEffectExample2/>
        </div>
    )
}
export default Contact