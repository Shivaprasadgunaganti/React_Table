import React from "react"
import   Navbar  from "../components/navbar/navbar"
import { Link, Outlet } from "react-router-dom"
function Contact() {
    return (
        <div>
            <Navbar/>
            <h2>contact</h2>
            <Link to={'doctor'}>Doctor</Link>
            <Link to={'engineer'}>Engineer</Link>
            <Outlet/>
        </div>
    )
}
export default Contact