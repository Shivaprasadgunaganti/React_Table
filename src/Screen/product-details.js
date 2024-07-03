import React from "react";
import { useParams } from "react-router";

function Productdetails() {
   const Param=useParams()
   console.log(Param)
  return (
    <div>
      <h2>Productdetails</h2>
    </div>
  );
}
export default Productdetails;
