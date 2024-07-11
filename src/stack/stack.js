import React, { createContext, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screen/Home-screen";
import About from "../Screen/About-screen";
import Contact from "../Screen/contact-screen";
import Invalid from "../Screen/invalid-screen";
import Productdetails from "../Screen/product-details";
import Doctor from "../Screen/doctor-screen";
import Engineer from "../Screen/engineer-screen";

const LazySetting = React.lazy(() => import("../Screen/Setting-screen"));

export const ProfileWrapper = createContext();

export function Stack() {
  // const [profileInfo, setProfileInfo] = useState({
  //   name: "ram",
  //   salary:30000
  // });
  const [counter,setCounter]= useState(100)

  //  const newName=(eachName)=>{
  //   setProfileInfo({...ProfileWrapper,name:eachName})
  //  }

   const incrementCounter=()=>{
    setCounter(counter+100)
   }

   const decrementCounter = ()=>{
    if(counter>0)
      setCounter(counter-100)
   }

   const updateValue = (x)=>{
    setCounter(x)
    // console.log(counter)
   }

  return (
    <ProfileWrapper.Provider value={
      {
        // key:profileInfo,
        // newName,
        counter,
        incrementCounter,
        decrementCounter,
        updateValue
      }
    }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="doctor" element={<Doctor />} />
            <Route path="engineer" element={<Engineer />} />
          </Route>

          <Route
            path="/setting"
            element={
              <Suspense fallback={<div>loading</div>}>
                <LazySetting />
              </Suspense>
            }
          />
          <Route
            path="/:category/:productId/info"
            element={<Productdetails />}
          />
          <Route path="*" element={<Invalid />} />
        </Routes>
      </BrowserRouter>
    </ProfileWrapper.Provider>
  );
}
