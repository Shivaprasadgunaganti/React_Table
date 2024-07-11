import React, { useRef } from 'react'

const UseRef = () => {
    let data=useRef("")
    console.log(data.current)
  return (
    <div>
      <h2 ref={data}>hello</h2>
    </div>
  )
}

export default UseRef
