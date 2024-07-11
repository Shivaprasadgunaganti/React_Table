import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [a,seta]=useState(0)
    useEffect(()=>{
   seta(a+1)
    },[a])

    console.log(a)
  return (
    <div>
      
    </div>
  )
}

export default Demo
