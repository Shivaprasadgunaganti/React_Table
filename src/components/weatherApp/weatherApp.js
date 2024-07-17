import axios from "axios";
import { useRef, useState } from "react";
import "../weatherApp/weatherAppData.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  // console.log(city)
  const [res1, setres1] = useState(0);
  const cityvalue=useRef(null)
  

  // const mydata =()=>{
  //     console.log(cityvalue.current.value)
  //     setCity(cityvalue.current.value)
  // }
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2510581a618b1804ce17c37f73ff245`
      );
      let kelvin = response.data.main.temp;
 
      let tempToKelvin = Math.trunc(kelvin - 273.15);
      setres1(tempToKelvin + "°c");
      setCity(cityvalue.current.value)
      // console.log(cityvalue)
    } catch (err) {
      const statusCode = err.response.data.cod;
      const msgData = err.response.data.message;
      if (statusCode === "404") {
        alert(msgData);
      }
    }
  };
 
  const temp = parseInt(res1);  
 
  let img =
    temp === 0
      ? "https://www.shutterstock.com/image-photo/blue-sky-260nw-59299873.jpg"
      : temp <= 25
      ? "https://www.stormshieldapp.com/static/images/section1.1-bg.jpg"
      : "https://img.freepik.com/premium-vector/sky-clouds-design-with-flat-cartoon-poster-flyers-postcards-web-banners_771576-58.jpg";

  return (
    <div
      id="styling"
      className="bg"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="input">
        <input type="text"   ref={cityvalue}/>

        <button type="submit" onClick={fetchData}>
          submit
        </button>
        <h2>Temparature: {res1}</h2>
      </div>
    </div>
  );
};
export default WeatherApp;
