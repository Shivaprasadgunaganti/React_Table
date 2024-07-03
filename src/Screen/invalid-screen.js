import React from "react";
import { useNavigate } from "react-router-dom";


 function Invalid(){

   const navigate=useNavigate()
   const returnBack=()=>{
   const isRedirect = true;
   if(isRedirect){
    navigate('/')
   }
   else{
    
   }
}
    return (
        <>
        <h3>Page not found</h3>
        <button onClick={returnBack}>Back to home</button>
      </>
    )
 }
 export default Invalid