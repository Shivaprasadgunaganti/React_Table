import { useState } from "react";

// import { useState } from "react"

const DateFunction = () =>{
    const [date1] = useState(new Date())

     const fetchDate= ()=>{
        let date = date1.getDate()
        let  month =date1.getMonth()+1
        let  year = date1.getFullYear()

        return `${date} ${month} ${year}`
     }
    return (
      <div>
        <h2>Calender</h2>
        <h2>{fetchDate()}</h2>
      </div>
    )
}
export default DateFunction

export const DataFunction = () => {
  const [num,setnum] = useState('');
  console.log(num)

 function fetchData(e) {
    setnum(e.target.value)
}

  return <div>
     <input type="text"  onChange={fetchData} value={num} /> 
    <input type="text" placeholder={num%2===0?"even":"odd"}/> 

  </div>;
};
