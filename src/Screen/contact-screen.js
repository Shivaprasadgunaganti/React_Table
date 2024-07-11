import React, { useContext } from "react";
import Navbar from "../components/navbar/navbar";
import { Link, Outlet } from "react-router-dom";
import UseEffectExample2 from "../components/useEffect/useEffectExample2";
import { ProfileWrapper } from "../stack/stack";
function Contact() {
  const profileInfo = useContext(ProfileWrapper);
  console.log(profileInfo);
  const changeName = () => {
    profileInfo.newName("shanmukh");
  };
  return (
    <div>
      <Navbar />
      <h2>contact</h2>
      <h2>my name is {profileInfo.key.name} </h2>
      <button onClick={changeName}>click for name change</button>
      <Link to={"doctor"}>Doctor</Link>
      <Link to={"engineer"}>Engineer</Link>
      <Outlet />
      <UseEffectExample2 />
     
    </div>
  );
}
export default Contact;
