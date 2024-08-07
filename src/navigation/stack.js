import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screen/Home-screen";
import About from "../Screen/About-screen";
import Contact from "../Screen/contact-screen";
import Invalid from "../Screen/invalid-screen";
import Productdetails from "../Screen/product-details";
import Doctor from "../Screen/doctor-screen";
import Engineer from "../Screen/engineer-screen";

const LazySetting = React.lazy(() => import("../Screen/Setting-screen"));

export function Stack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
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
        <Route path="/:category/:productId/info" element={<Productdetails />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </BrowserRouter>
  );
}
