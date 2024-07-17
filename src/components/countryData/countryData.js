import axios from "axios";
import { useEffect, useState } from "react";

const Country = () => {
  const [data1, setData] = useState([]);
  const [country, setCountry] = useState([]);
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const res1 = response.data;
    // console.log(response.data)
    const value1 = res1.map((each) => {
      return each.name.official;
    });
    const value2 = res1.map((each) => {
      return each.capital;
    });

    setData(value1);
    console.log(value2);
  };

  const fetchCountry = (e) => {
    setCountry(e.target.value);
    countryHandler(e.target.value);
  };
  const countryHandler = async (eachCountry) => {
    const response1 = await axios.get(
      `https://restcountries.com/v3.1/name/${eachCountry}`
    );
    // console.log(response1.data[0])
    setCountryData(response1.data[0]);
  };
  return (
    <>
      <select onChange={fetchCountry}>
        {data1.map((each, index) => (
          <option value={each} key={index}>
            {each}
          </option>
        ))}
      </select>
      <h2>{country}</h2>
      {Object.keys(countryData).length > 0 && (
        <>
          <h2>capital:{countryData.capital[0]}</h2>
          <h2>{countryData.flag}</h2>
          <img src={countryData.flags.png} alt="" />
        </>
      )}
    </>
  );
};
export default Country;
